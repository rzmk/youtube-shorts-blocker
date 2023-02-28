// Wait for the page to finish loading
window.addEventListener("load", () => {
  // Find the anchor tag with the title "Shorts"
  const anchor = document.querySelector('a[title="Shorts"]');

  // If the anchor exists, remove it from the page
  if (anchor) anchor.remove();
});
