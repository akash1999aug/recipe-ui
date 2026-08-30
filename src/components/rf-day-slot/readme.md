# rf-day-slot



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute      | Description                                                 | Type                  | Default     |
| ------------------ | -------------- | ----------------------------------------------------------- | --------------------- | ----------- |
| `day` _(required)_ | `day`          | Day of the week this slot represents, e.g. "Monday".        | `string`              | `undefined` |
| `empty`            | `empty`        | Whether this day currently has no recipe assigned.          | `boolean`             | `true`      |
| `recipeImage`      | `recipe-image` | Thumbnail image of the recipe assigned to this day, if any. | `string \| undefined` | `undefined` |
| `recipeTitle`      | `recipe-title` | Title of the recipe assigned to this day, if any.           | `string \| undefined` | `undefined` |


## Events

| Event        | Description                                                  | Type                         |
| ------------ | ------------------------------------------------------------ | ---------------------------- |
| `addMeal`    | Fired when the user wants to assign a recipe to this day.    | `CustomEvent<DaySlotDetail>` |
| `removeMeal` | Fired when the user removes the recipe assigned to this day. | `CustomEvent<DaySlotDetail>` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | The default slot |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
