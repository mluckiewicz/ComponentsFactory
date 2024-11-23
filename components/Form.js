import Component from './Component.js';
import ComponentFactory from '../utils/ComponentFactory.js'

export default class Form extends Component {
  constructor({ parent, state, components, eventBus }) {
    super({
      parent,
      state,
      components,
      eventBus,
      template: () => `
        <form>
          <div class="row">
            <!-- Left column: Configured fields -->
            <div class="col-6">
              <div class="form-fields"></div>
            </div>

            <!-- Right column: Questions list -->
            <div class="col-6">
              <div class="questions-list-container"></div>
            </div>
          </div>

          <div class="form-actions mt-4 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" id="cancel">Cancel</button>
            <button type="button" class="btn btn-primary" id="next">Next</button>
          </div>
        </form>
      `,
      events: {
        'click #cancel': 'onCancel',
        'click #next': 'onNext',
      },
    });
  }

  onCancel() {
    this.eventBus.emit('form:canceled');
  }

  onNext() {
    const selectedPerson = this.element.querySelector('#person-select')?.value;
    const selectedLine = this.element.querySelector('#line-select')?.value;
    const selectedDate = this.element.querySelector('#date-picker')?.value;

    this.eventBus.emit('form:next', { selectedPerson, selectedLine, selectedDate });
  }

  update(state) {
    if (state.questions) {
      const container = this.element.querySelector('.questions-list-container');
      // Tworzenie dynamicznego komponentu QuestionsList
      ComponentFactory.createComponent('QuestionsList', {
        parent: container,
        state: { questions: state.questions },
        eventBus: this.eventBus,
      });
    }
  }
}
