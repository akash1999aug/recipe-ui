import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export interface FavoriteToggleDetail {
  mealId: string;
}

export interface ViewRecipeDetail {
  mealId: string;
}

@Component({
  tag: 'rf-recipe-card',
  styleUrl: 'rf-recipe-card.css',
  shadow: true,
})
export class RfRecipeCard {
  /** Unique identifier for the recipe (API id or local-* id). */
  @Prop() mealId!: string;

  /** Recipe title. */
  @Prop() recipeTitle = '';

  /** Recipe thumbnail image URL. */
  @Prop() image = '';

  /** Recipe category, e.g. "Seafood". */
  @Prop() category = '';

  /** Recipe area/cuisine, e.g. "Italian". */
  @Prop() area = '';

  /** Whether this recipe is currently in the user's favorites. */
  @Prop() isFavorite = false;

  /** Whether this recipe was created locally by the user (shows a "My Recipe" badge). */
  @Prop() isCustom = false;

  /** Fired when the favorite button is clicked. */
  @Event() favoriteToggle!: EventEmitter<FavoriteToggleDetail>;

  /** Fired when the card body is clicked to open the recipe details. */
  @Event() viewRecipe!: EventEmitter<ViewRecipeDetail>;

  private onFavoriteClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.favoriteToggle.emit({ mealId: this.mealId });
  };

  private onCardClick = () => {
    this.viewRecipe.emit({ mealId: this.mealId });
  };

  render() {
    return (
      <div class="rf-card" onClick={this.onCardClick}>
        <div class="rf-card__media">
          {this.image ? <img src={this.image} alt={this.recipeTitle} loading="lazy" /> : null}
          {this.isCustom ? <span class="rf-card__badge">My Recipe</span> : null}
          <button
            class={{ 'rf-card__fav': true, 'rf-card__fav--active': this.isFavorite }}
            type="button"
            aria-pressed={this.isFavorite ? 'true' : 'false'}
            aria-label={this.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            onClick={this.onFavoriteClick}
          >
            {this.isFavorite ? '♥' : '♡'}
          </button>
        </div>
        <div class="rf-card__body">
          <h3 class="rf-card__title">{this.recipeTitle}</h3>
          <p class="rf-card__meta">
            {[this.category, this.area].filter(Boolean).join(' · ')}
          </p>
        </div>
        <div class="rf-card__footer" onClick={(event) => event.stopPropagation()}>
          <slot name="footer" />
        </div>
      </div>
    );
  }
}
