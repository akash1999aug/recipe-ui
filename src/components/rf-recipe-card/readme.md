# rf-recipe-card



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute      | Description                                                                      | Type      | Default     |
| --------------------- | -------------- | -------------------------------------------------------------------------------- | --------- | ----------- |
| `area`                | `area`         | Recipe area/cuisine, e.g. "Italian".                                             | `string`  | `''`        |
| `category`            | `category`     | Recipe category, e.g. "Seafood".                                                 | `string`  | `''`        |
| `image`               | `image`        | Recipe thumbnail image URL.                                                      | `string`  | `''`        |
| `isCustom`            | `is-custom`    | Whether this recipe was created locally by the user (shows a "My Recipe" badge). | `boolean` | `false`     |
| `isFavorite`          | `is-favorite`  | Whether this recipe is currently in the user's favorites.                        | `boolean` | `false`     |
| `mealId` _(required)_ | `meal-id`      | Unique identifier for the recipe (API id or local-* id).                         | `string`  | `undefined` |
| `recipeTitle`         | `recipe-title` | Recipe title.                                                                    | `string`  | `''`        |


## Events

| Event            | Description                                                     | Type                                |
| ---------------- | --------------------------------------------------------------- | ----------------------------------- |
| `favoriteToggle` | Fired when the favorite button is clicked.                      | `CustomEvent<FavoriteToggleDetail>` |
| `viewRecipe`     | Fired when the card body is clicked to open the recipe details. | `CustomEvent<ViewRecipeDetail>`     |


## Slots

| Slot       | Description |
| ---------- | ----------- |
| `"footer"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
