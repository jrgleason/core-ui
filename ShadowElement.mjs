function CREATE_ELEMENT(name, object, params) {
  customElements.get(name) ||
        customElements.define(name, object, params);
}
class ShadowElement extends HTMLElement {
  constructor(mode = 'open') {
    super();
    this.mode = mode;
    this.attachShadow({mode});
  }
}
export {ShadowElement, CREATE_ELEMENT};
