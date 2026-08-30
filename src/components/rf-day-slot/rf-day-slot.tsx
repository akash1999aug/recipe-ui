import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export interface DaySlotDetail {
  day: string;
}

@Component({
  tag: 'rf-day-slot',
  styleUrl: 'rf-day-slot.css',
  shadow: true,
})
export class RfDaySlot {
  /** Day of the week this slot represents, e.g. "Monday". */
  @Prop() day!: string;

  /** Title of the recipe assigned to this day, if any. */
  @Prop() recipeTitle?: string;

  /** Thumbnail image of the recipe assigned to this day, if any. */
  @Prop() recipeImage?: string;

  /** Whether this day currently has no recipe assigned. */
  @Prop() empty = true;

  /** Fired when the user wants to assign a recipe to this day. */
  @Event() addMeal!: EventEmitter<DaySlotDetail>;

  /** Fired when the user removes the recipe assigned to this day. */
  @Event() removeMeal!: EventEmitter<DaySlotDetail>;

  private onAdd = () => this.addMeal.emit({ day: this.day });
  private onRemove = () => this.removeMeal.emit({ day: this.day });

  render() {
    return (
      <div class={{ 'rf-slot': true, 'rf-slot--empty': this.empty }}>
        <span class="rf-slot__day">{this.day}</span>

        {this.empty ? (
          <button class="rf-slot__add" type="button" onClick={this.onAdd}>
            <slot>+ Add recipe</slot>
          </button>
        ) : (
          <div class="rf-slot__meal">
            {this.recipeImage ? <img src={this.recipeImage} alt={this.recipeTitle} /> : null}
            <span class="rf-slot__title">{this.recipeTitle}</span>
            <button class="rf-slot__remove" type="button" aria-label="Remove meal" onClick={this.onRemove}>
              ✕
            </button>
          </div>
        )}
      </div>
    );
  }
}
