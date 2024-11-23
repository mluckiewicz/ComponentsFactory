export default class View {
    constructor({ root, components }) {
      this.root = root;
      this.components = components;
      this.form = null; // Reference to the form component
    }

    render() {
      this.components.forEach((componentConfig) => {

        const component = new componentConfig.type({
          ...componentConfig,
          parent: this.root,
        });
        console.log(component)
        component.render();

        if (componentConfig.type.name === 'Form') {
          this.form = component; // Store reference to the form
        }
      });
    }

    updateForm(newState) {
      if (this.form) {
        this.form.update(newState);
      }
    }
  }
