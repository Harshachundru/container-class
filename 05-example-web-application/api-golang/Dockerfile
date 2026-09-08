# syntax=docker/dockerfile:1

# ---- Build stage -----------------------------------------------------------
# golang:*-alpine has the full toolchain (compiler, go.mod/go.sum resolution)
# but never ships in the final image — only the compiled binaries do.
FROM golang:1.23-alpine AS build

WORKDIR /src

# Copy just the dependency manifests first so `go mod download` is cached
# and only reruns when go.mod/go.sum actually change, not on every source edit.
COPY go.mod go.sum ./
RUN --mount=type=cache,target=/go/pkg/mod \
    go mod download

COPY . .

# CGO_ENABLED=0 produces a statically linked binary with no libc dependency,
# which is required for it to run on the scratch-like "distroless/static"
# base below (there's no dynamic linker there to satisfy).
# The module and build caches are mounted (not copied into any layer), so
# repeat builds reuse them without bloating the image.
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    CGO_ENABLED=0 GOOS=linux go build -o /out/api-golang . && \
    CGO_ENABLED=0 GOOS=linux go build -o /out/healthcheck ./healthcheck

# ---- Production stage ------------------------------------------------------
# distroless/static: no shell, no package manager, no libc — just enough to
# run a static Go binary. Small attack surface, and the ":nonroot" variant
# already runs as an unprivileged user (uid 65532), so no `adduser` dance.
FROM gcr.io/distroless/static-debian12:nonroot AS production

WORKDIR /app

COPY --from=build /out/api-golang /out/healthcheck ./

# Redundant with the base image's default, but explicit for anyone reading
# this file — this must never run as root.
USER nonroot:nonroot

EXPOSE 8080

# The healthcheck binary just hits GET /ping and exits 0/1 — distroless has
# no shell, so a shell-based `curl ... || exit 1` HEALTHCHECK isn't possible.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD ["/app/healthcheck"]

ENTRYPOINT ["/app/api-golang"]
