// check the position scroll ofset and return it to top if it isn't allready at the top
export default function checkScrollPosition() {
  let scrollPosition = window.pageYOffset;
  if (scrollPosition > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
