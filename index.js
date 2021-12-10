function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = (timestamp) => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}

animateNumber(
  (value) => {
    document.querySelector("strong").textContent = Math.floor(value);
  },
  0,
  100,
  8000
);

