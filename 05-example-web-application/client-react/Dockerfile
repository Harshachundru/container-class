# syntax=docker/dockerfile:1

# ---- Build stage -----------------------------------------------------------
# Node is only needed to run vite build — none of it ships in the final image.
FROM node:20-alpine AS build

WORKDIR /app

# Manifests first so `npm ci` is cached and only reruns when they change.
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN npm run build
# -> static output in /app/dist

# ---- Production stage ------------------------------------------------------
# nginx-unprivileged (not the stock `nginx` image) listens on 8080 and runs
# as the non-root "nginx" user (uid 101) out of the box — no chown/permission
# workarounds needed to make stock nginx (root master process, port 80) run
# unprivileged. nginx.conf in this repo already `listen`s on 8080 to match.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Alpine-based, so a plain shell/wget healthcheck (unlike the golang service's
# distroless image) works fine here.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O- http://localhost:8080/ping || exit 1
