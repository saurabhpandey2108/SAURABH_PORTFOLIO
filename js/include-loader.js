/* =========================================================
   INCLUDE LOADER
   Fetches every <div data-include="path/to.html"></div>,
   replaces the placeholder with the file contents, then
   dispatches a "sections-loaded" event so main.js can bind
   listeners to elements that now exist in the DOM.
   ========================================================= */
(async function () {
  const placeholders = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(placeholders).map(async (el) => {
      const url = el.getAttribute("data-include");
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.status + " " + res.statusText);
        const html = await res.text();
        el.outerHTML = html;
      } catch (err) {
        console.error("Failed to load include:", url, err);
        el.outerHTML = "<!-- failed to load " + url + " -->";
      }
    })
  );
  window.dispatchEvent(new Event("sections-loaded"));
})();
