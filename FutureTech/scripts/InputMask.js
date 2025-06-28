const rootSelector = "[data-js-input-mask]";

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    const isLiReady = typeof window.IMask !== "undefined";

    if (isLiReady) {
      window.IMask(this.rootElement, { mask: this.rootElement.dataset.jsInputMask });
    } else {
      console.error("Libr 'IMask' not connect");
    }
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((elem) => {
      new InputMask(elem);
    });
  }
}

export default InputMaskCollection;
