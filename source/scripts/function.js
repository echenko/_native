function debounce(callee, timeoutMs = 500) {
  return function perform(...args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

function throttle(callee, timeout) {
  let timer = null;
  return function perform(...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callee(...args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

function random(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export { debounce, throttle, random };
