import Component from './Component.js';

export default class DatePicker extends Component {
  constructor({ parent, state, eventBus }) {
    super({
      parent,
      state,
      eventBus,
      template: () => `
        <div>
          <label for="date-picker">Select Date:</label>
          <input type="date" id="date-picker" value="${state.date}" />
        </div>
      `,
    });
  }
}
