import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

export interface SearchChangeDetail {
  query: string;
}

@Component({
  tag: 'rf-search-bar',
  styleUrl: 'rf-search-bar.css',
  shadow: true,
})
export class RfSearchBar {
  /** Placeholder text for the input. */
  @Prop() placeholder = 'Search...';

  /** Current value of the search input (controlled from outside). */
  @Prop({ mutable: true }) value = '';

  /** Debounce delay, in ms, before searchChange is emitted after typing stops. */
  @Prop() debounce = 300;

  /** Fired with the current query after the debounce window elapses. */
  @Event() searchChange!: EventEmitter<SearchChangeDetail>;

  private timer?: ReturnType<typeof setTimeout>;

  private onInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.searchChange.emit({ query: this.value.trim() });
    }, this.debounce);
  };

  private onSubmit = (event: Event) => {
    event.preventDefault();
    if (this.timer) clearTimeout(this.timer);
    this.searchChange.emit({ query: this.value.trim() });
  };

  disconnectedCallback() {
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    return (
      <form class="rf-search" onSubmit={this.onSubmit}>
        <span class="rf-search__icon" aria-hidden="true">
          🔍
        </span>
        <input
          class="rf-search__input"
          type="search"
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.onInput}
          aria-label={this.placeholder}
        />
        <span class="rf-search__actions">
          <slot name="actions" />
        </span>
      </form>
    );
  }
}
