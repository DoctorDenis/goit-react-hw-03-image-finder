import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.module.css';

// import PropTypes from 'prop-types';

export class Searchbar extends React.Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    query: '',
  };

  changeHandler = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.props.onSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            value={this.state.query}
            name="query"
            onChange={this.changeHandler}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
