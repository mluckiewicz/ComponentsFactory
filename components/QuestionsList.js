import Component from './Component.js';
import ComponentFactory from '../utils/ComponentFactory.js';

export default class QuestionsList extends Component {
  constructor({ parent, state, eventBus }) {
    super({
      parent,
      state,
      eventBus,
      template: () => `
        <div class="questions-list"></div>
      `,
      events: {},
    });

    this.components = [];
    this.renderQuestions();
  }

  renderQuestions() {
    const container = this.element.querySelector('.questions-list');
    this.components = this.state.questions.map((question) =>
      ComponentFactory.createComponent('Question', {
        parent: container,
        state: question,
        eventBus: this.eventBus,
      })
    );
  }

  update(state) {
    this.state = state;
    this.renderQuestions();
  }
}
