// ==UserScript==
// @name          tampermonkey-contex-menu
// @description   I alert `clicked-link-url` that is saved inside the sessionStorage
// @version       0.0.1
// @match         *://*/*
// @run-at        context-menu
// ==/UserScript==

const clickedLinkURL = sessionStorage.getItem('clicked-link-url');
if (clickedLinkURL) {
  alert(clickedLinkURL);
  sessionStorage.removeItem('clicked-link-url');
}
