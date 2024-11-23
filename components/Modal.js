import Component from './Component.js';

export default class Modal extends Component {
  constructor({ parent, state, components, eventBus }) {
    super({
      parent,
      state,
      components,
      eventBus,
      template: (state) => `
        <div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
          </button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">${state.title}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"> </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary modal-close" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Understood</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      events: {
        'click .modal-close': 'onClose',
      },
    });
  }

  onClose() {
    this.eventBus.emit('modal:closed');
    this.destroy();
  }
}
