import Modal from './components/Modal.js';
import Form from './components/Form.js';
import View from './view/View.js';
import Model from './model/Model.js';
import Controller from './controller/Controller.js';
import EventBus from './utils/EventBus.js'
import PeopleSelect from './components/PeopleSelect.js'
import LineSelect from './components/LineSelect.js';
import DatePicker from './components/DatePicker.js';

const root = document.getElementById('app');
const eventBus = new EventBus();
const model = new Model();

const view = new View({
  root,
  components: [
    {
      type: Modal,
      state: { title: 'Survey Form' },
      components: [
        {
          type: Form,
          state: { questions: [] },
          components: [
            {
              type: PeopleSelect,
              parentSelector: '.form-fields',
              state: {
                people: [
                  { id: 1, name: 'Alice' },
                  { id: 2, name: 'Bob' },
                ],
              },
            },
            {
              type: LineSelect,
              parentSelector: '.form-fields',
              state: {
                lines: [
                  { id: 'line1', name: 'Line 1' },
                  { id: 'line2', name: 'Line 2' },
                ],
              },
            },
            {
              type: DatePicker,
              parentSelector: '.form-fields',
              state: { date: '' },
            },
          ],
        },
      ],
    },
  ],
});

const controller = new Controller({ view, model, eventBus });
console.log(view)
view.render();
