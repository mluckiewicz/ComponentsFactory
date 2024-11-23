import PeopleSelect from '../components/PeopleSelect.js';
import LineSelect from '../components/LineSelect.js';
import DatePicker from '../components/DatePicker.js';
import QuestionsList from '../components/QuestionsList.js';
import Question from '../components/Question.js';

export default class ComponentFactory {
  static createComponent(type, options) {
    switch (type) {
      case 'PeopleSelect':
        return new PeopleSelect(options);
      case 'LineSelect':
        return new LineSelect(options);
      case 'DatePicker':
        return new DatePicker(options);
      case 'QuestionsList':
        return new QuestionsList(options);
      case 'Question':
        return new Question(options);
      default:
        throw new Error(`Unknown component type: ${type}`);
    }
  }
}
