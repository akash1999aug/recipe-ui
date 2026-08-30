import { Component, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
  tag: 'rf-modal',
  styleUrl: 'rf-modal.css',
  shadow: true,
})
export class RfModal {
  /** Controls whether the modal is visible. */
  @Prop({ reflect: true }) open = false;

  /** Heading text shown at the top of the modal. */
  @Prop() heading = '';

  /** Fired when the user requests the modal to close (backdrop click, close button, or Escape). */
  @Event() modalClose!: EventEmitter<void>;

  @Listen('keydown', { target: 'document' })
  handleKeydown(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      this.close();
    }
  }

  private close = () => {
    this.modalClose.emit();
  };

  render() {
    if (!this.open) return null;

    return (
      <div class="rf-modal-backdrop" onClick={this.close}>
        <div
          class="rf-modal"
          role="dialog"
          aria-modal="true"
          aria-label={this.heading}
          onClick={(event) => event.stopPropagation()}
        >
          <header class="rf-modal__header">
            <h2 class="rf-modal__heading">{this.heading}</h2>
            <button class="rf-modal__close" type="button" aria-label="Close" onClick={this.close}>
              ✕
            </button>
          </header>
          <div class="rf-modal__body">
            <slot />
          </div>
          <footer class="rf-modal__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    );
  }
}
