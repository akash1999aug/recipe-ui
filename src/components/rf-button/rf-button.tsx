import { Component, Prop, h } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

@Component({
  tag: 'rf-button',
  styleUrl: 'rf-button.css',
  shadow: true,
})
export class RfButton {
  /** Visual style of the button. */
  @Prop() variant: ButtonVariant = 'primary';

  /** Disables the button and prevents clicks. */
  @Prop() disabled = false;

  /** Native button type, useful when used inside a form. */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    return (
      <button class={`rf-btn rf-btn--${this.variant}`} type={this.type} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
