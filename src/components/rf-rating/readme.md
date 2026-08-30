# rf-rating



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                              | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------------------------ | --------- | ------- |
| `readonly` | `readonly` | When true, the rating is display-only and cannot be changed by the user. | `boolean` | `false` |
| `value`    | `value`    | Current rating value, 0-5.                                               | `number`  | `0`     |


## Events

| Event          | Description                                                           | Type                              |
| -------------- | --------------------------------------------------------------------- | --------------------------------- |
| `ratingChange` | Fired when the user picks a new rating (only when readonly is false). | `CustomEvent<RatingChangeDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
