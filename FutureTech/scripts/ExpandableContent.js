import pixToRem from "./utils/pxToRem.js";

const rootSelector = "[data-js-expandable-content]";

class expandableContent {
  selectors = {
    root: rootSelector,
    button: "[data-js-expandable-content-button]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
  };

  animationParams = {
    duration: 500,
    easing: "ease",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttomElement = this.rootElement.querySelector(this.selectors.button);
    this.bindEvents();
  }

  expand() {
    const { offsetHeight, scrollHeight } = this.rootElement;

    this.rootElement.classList.add(this.stateClasses.isExpanded);
    this.rootElement.animate(
      [
        { maxHeight: `${pixToRem(offsetHeight)}rem` },

        { maxHeight: `${pixToRem(scrollHeight)}rem` },
      ],
      this.animationParams
    );
  }

  onButtonClick = () => {
    this.expand();
  };

  bindEvents() {
    this.buttomElement.addEventListener("click", this.onButtonClick);
  }
}

class expandableContentCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((elem) => {
      new expandableContent(elem);
    });
  }
}

export default expandableContentCollection;
