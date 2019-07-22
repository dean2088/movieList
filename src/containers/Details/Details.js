import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import { connect } from 'react-redux';
import bindActions from 'helpers/bindDispatch';
import MovieCard from 'components/MovieCard';
import SubHeader from 'components/SubHeader';

//redux
import {
  load,
} from 'redux/modules/movies';

export class Details extends React.Component {
  static propTypes = {
    movies: PropTypes.object,
  };

  static defaultProps = {
    movies: { entries: [] },
    match: { params: { id: '' } }
  };

  componentWillMount() {
    const { movies } = this.props;
    if (movies.entries.length === 0 && this.props.load) {
      this.props.load();
    }
  }

  render() {
    const { movies, match: { params: { id } }, loading, loaded, error } = this.props;
    const list = movies.entries.filter(item => {
      return item.programType === id && +item.releaseYear >= 2010;
    }).sort((a, b) => (a.title > b.title ? 1 : -1)).slice(0, 21);
    const title = id === 'movie' ? 'Popular Movies' : 'Popular Series';

    return (
      <div>
        <SubHeader title={loaded ? title : 'Popular Titles'} />
        <div className={styles.content}>
          {error && <div>Oops, something went wrong...</div>}
          {loading && <div>Loading...</div>}
          {loaded && list.map(item => (<MovieCard
            key={item.title}
            url={item.images['Poster Art'].url}
            title={item.title}
          />))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: state.movies.result,
  loading: state.movies.loading,
  loaded: state.movies.loaded,
  error: state.movies.error
}), bindActions({
  load
}))(Details);
