import './App.css';
import FilmConsole from './containers/filmConsole';

function App() {
  return (
    <div class='App'>
      <h1>
        Go see some films
      </h1>
      <FilmConsole/>
      <a href = 'https://www.imdb.com/calendar/?region=gb'>Check out the latest releases</a>
    </div>
  );
}

export default App;
