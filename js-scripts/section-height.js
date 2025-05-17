function setFullHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // Initial call
  setFullHeight();

  // Update on window resize or orientation change
  window.addEventListener('resize', setFullHeight);