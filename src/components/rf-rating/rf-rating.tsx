import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export interface RatingChangeDetail {
  value: number;
}

@Component({
  tag: 'rf-rating',
  styleUrl: 'rf-rating.css',
  shadow: true,
})
export class RfRating {
  /** Current rating value, 0-5. */
  @Prop({ mutable: true, reflect: true }) value = 0;

  /** When true, the rating is display-only and cannot be changed by the user. */
  @Prop() readonly = false;

  /** Fired when the user picks a new rating (only when readonly is false). */
  @Event() ratingChange!: EventEmitter<RatingChangeDetail>;

  private stars = [1, 2, 3, 4, 5];

  private select(star: number) {
    if (this.readonly) return;
    this.value = star;
    this.ratingChange.emit({ value: star });
  }

  render() {
    return (
      <div class="rf-rating" role={this.readonly ? undefined : 'radiogroup'} aria-label="Rating">
        {this.stars.map((star) => (
          <button
            type="button"
            class={{ 'rf-star': true, 'rf-star--filled': star <= this.value }}
            disabled={this.readonly}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
            onClick={() => this.select(star)}
          >
            ★
          </button>
        ))}
      </div>
    );
  }
}
