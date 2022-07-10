// ==UserScript==
// @name          Menu Test Helper
// @description   I watch for right click events and save links URLS into the sessionStorage
// @version       0.0.1
// @match         *://*/*
// @run-at        start
// ==/UserScript==

function rightClickHandler({ target }) {
  sessionStorage.removeItem('clicked-link-url');
  const closestLink = target.closest('a')?.href;
  if (closestLink) {
    console.log(`This the closest link to the clicked element: ${closestLink}`);
    sessionStorage.setItem('clicked-link-url', closestLink);
  }
}
window.addEventListener('contextmenu', rightClickHandler);
