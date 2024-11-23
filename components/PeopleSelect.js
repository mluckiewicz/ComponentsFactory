import Component from './Component.js';

export default class PeopleSelect extends Component {
  constructor({ parent, state, eventBus }) {
    super({
      parent,
      state,
      eventBus,
      template: (state) => `
        <div>
          <label for="person-select">Select Person:</label>
          <select id="person-select">
            ${state.people.map((person) => `<option value="${person.id}">${person.name}</option>`).join('')}
          </select>
        </div>
      `,
    });
  }
}
