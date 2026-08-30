import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export interface ChipToggleDetail {
  label: string;
  selected: boolean;
}

@Component({
  tag: 'rf-chip',
  styleUrl: 'rf-chip.css',
  shadow: true,
})
export class RfChip {
  /** Text shown inside the chip. */
  @Prop() label!: string;

  /** Whether the chip is currently active/selected. */
  @Prop({ mutable: true, reflect: true }) selected = false;

  /** Fired whenever the chip is clicked, with the new selected state. */
  @Event() chipToggle!: EventEmitter<ChipToggleDetail>;

  private handleClick = () => {
    this.selected = !this.selected;
    this.chipToggle.emit({ label: this.label, selected: this.selected });
  };

  render() {
    return (
      <button
        class={{ 'rf-chip': true, 'rf-chip--selected': this.selected }}
        type="button"
        aria-pressed={this.selected ? 'true' : 'false'}
        onClick={this.handleClick}
      >
        {this.label}
      </button>
    );
  }
}
