import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeSearchQuery = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChangeSearchQuery}
          />
        </form>
      </header>
    );
  }
}