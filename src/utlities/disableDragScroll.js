// it disable the scroll on drag, but it probably disable it at all, so probably, if it's gonna be more
//  game tiles, the application does not scroll too.
export default function disableDragScroll() {
  document.body.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
}
