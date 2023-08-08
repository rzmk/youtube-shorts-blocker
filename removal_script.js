// Wait for the page to finish loading
window.addEventListener("load", () => {
    // Find the anchor tag with the title "Shorts"
    const anchor = document.querySelector('a[title="Shorts"]');

    // If the anchor's parent exists, remove it from the page
    if (anchor.parentElement) anchor.parentElement.remove();
    // Otherwise, if the anchor exists, remove it from the page
    else if (anchor) anchor.remove();
});
