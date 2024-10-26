import useNowPlayingmovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingmovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {/* {
          MainContainer
            -VideoBackground
            -VideoTitle
          SecoundaryContainer
            -MovieList * n
            -cards * n
      
      
      } */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;
