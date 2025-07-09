class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      // Call the renderer, and pass it the item
      this._renderer(item);
    });
  }

  addItem(element) {
    // Add element to container
    this._container.append(element);
  }
}

export default Section;
