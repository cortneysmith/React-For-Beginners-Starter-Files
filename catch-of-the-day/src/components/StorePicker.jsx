import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop from submitting.
    event.preventDefault();

    // 2. Get text from input.
    const storeName = this.myInput.current.value;

    // 3. Route to /store/text-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
