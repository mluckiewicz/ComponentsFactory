import Model from '../model/Model.js';

export default class Controller {
  constructor({ view, model, eventBus }) {
    this.view = view;
    this.model = model;
    this.eventBus = eventBus;

    this.init();
  }

  init() {
    this.eventBus.on('form:next', async ({ selectedPerson, selectedLine, selectedDate }) => {
      const questions = await this.model.fetchSurveyQuestions(selectedLine);

      // Update the form with new questions
      this.view.updateForm({ questions });
    });
  }
}
