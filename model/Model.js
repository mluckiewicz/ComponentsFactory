export default class Model {
    async fetchSurveyQuestions(lineId) {
      // Simulated API call
      const questions = {
        line1: [
          { id: 1, text: 'How would you rate our service?' },
          { id: 2, text: 'How likely are you to recommend us?' },
        ],
        line2: [
          { id: 3, text: 'Was the waiting time acceptable?' },
          { id: 4, text: 'Did the staff address your concerns?' },
        ],
      };

      return questions[lineId] || [];
    }
  }
