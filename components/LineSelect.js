import Component from './Component.js';

export default class LineSelect extends Component {
  constructor({ parent, state, eventBus }) {
    super({
      parent,
      state,
      eventBus,
      template: (state) => `
        <div>
          <label for="line-select">Select Line:</label>
          <select id="line-select">
            ${state.lines.map((line) => `<option value="${line.id}">${line.name}</option>`).join('')}
          </select>
        </div>
      `,
    });
  }
}
