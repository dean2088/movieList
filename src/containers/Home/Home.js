import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import { connect } from 'react-redux';
import bindActions from 'helpers/bindDispatch';
import MovieCard from 'components/MovieCard';
import movieImage from 'sources/images/movies.png';
import seriesImage from 'sources/images/series.png';
import SubHeader from 'components/SubHeader';
import { Link } from 'react-router-dom';

//redux
import {
  load,
} from 'redux/modules/movies';

export class Home extends React.Component {
  static propTypes = {
    movies: PropTypes.object,
  };

  static defaultProps = {
    movies: { entries: [] }
  };

  componentWillMount() {
    if (this.props.load) {
      this.props.load();
    }
  }

  render() {
    const { movies, loading, loaded, error } = this.props;
    const programTypeList = [...new Set(movies.entries.map(item => item.programType))];
    return (
      <div>
        <SubHeader title="Popular Titles" />
        <div className={styles.content}>
          {error && <div>Oops, something went wrong...</div>}
          {loading && <div>Loading...</div>}
          {loaded && programTypeList.map(item => (
            <Link to={`/${item}`} key={item}>
              <MovieCard
                url={item === 'movie' ? movieImage : seriesImage}
                title={item === 'movie' ? 'Popular movies' : 'Popular series'}
              />
            </Link>
          ))}
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
}))(Home);
