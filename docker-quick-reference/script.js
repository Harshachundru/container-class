// Wires up the print button. Browser print dialogs won't fire from a
// static file:// origin without a user gesture, so this keeps it simple.
document.getElementById('print-btn').addEventListener('click', () => {
  window.print();
});
