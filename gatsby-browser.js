function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if (!item) return;
    const rect = item.getBoundingClientRect();
    const topOffset = rect.top + window.scrollY;
    const offsetTop = topOffset - item.offsetHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);
