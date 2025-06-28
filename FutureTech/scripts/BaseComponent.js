class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("Cannot create an instance of an abstract class ");
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  //redrawing the UI in response to a state update

  updateUI() {
    throw new Error("Need realise method updateUI");
  }
}

export default BaseComponent;
