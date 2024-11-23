export default class Component {
    constructor({ parent, state, components = [], template, events, eventBus }) {
      this.parent = parent;
      this.state = state || {};
      this.components = components;
      this.template = template || (() => '<div></div>');
      this.events = events || {};
      this.eventBus = eventBus;
      this.element = null;
    }

    render() {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = this.template(this.state).trim();
      this.element = wrapper.firstChild;

      if (this.parent) {
        this.parent.appendChild(this.element);
      }

      this.renderChildren();
      this.bindEvents();
    }

    renderChildren() {
      this.components.forEach((config) => {
        const childComponent = new config.type({
          parent: this.element.querySelector(config.parentSelector),
          state: config.state,
          components: config.components,
          eventBus: this.eventBus,
        });
        childComponent.render();
      });
    }

    bindEvents() {
      Object.entries(this.events).forEach(([key, handlerName]) => {
        const [event, selector] = key.split(' ');
        const elements = this.element.querySelectorAll(selector);
        elements.forEach((el) =>
          el.addEventListener(event, this[handlerName].bind(this))
        );
      });
    }

    update(newState = {}) {
      // Update state
      this.state = { ...this.state, ...newState };

      // Re-render the component
      if (this.element) {
        this.element.remove();
      }
      this.render();
    }

    destroy() {
      if (this.element) {
        this.element.remove();
        this.element = null;
      }
    }
  }
