import Component from './Component.js';

export default class Question extends Component {
  constructor({ parent, state, eventBus }) {
    super({
      parent,
      state,
      eventBus,
      template: (state) => `
        <div class="question mb-3">
          <label>${state.text}</label>
          <input type="range" min="1" max="5" value="${state.value || 3}" class="form-range" />
        </div>
      `,
      events: {},
    });
  }
}
