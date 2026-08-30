# rf-search-bar



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                               | Type     | Default       |
| ------------- | ------------- | ------------------------------------------------------------------------- | -------- | ------------- |
| `debounce`    | `debounce`    | Debounce delay, in ms, before searchChange is emitted after typing stops. | `number` | `300`         |
| `placeholder` | `placeholder` | Placeholder text for the input.                                           | `string` | `'Search...'` |
| `value`       | `value`       | Current value of the search input (controlled from outside).              | `string` | `''`          |


## Events

| Event          | Description                                                     | Type                              |
| -------------- | --------------------------------------------------------------- | --------------------------------- |
| `searchChange` | Fired with the current query after the debounce window elapses. | `CustomEvent<SearchChangeDetail>` |


## Slots

| Slot        | Description |
| ----------- | ----------- |
| `"actions"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
