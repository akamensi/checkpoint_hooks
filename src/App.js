import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovies';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovies';

function App() {
  const[movies,setMovies]=useState([
    {title:"Dachra", description:"Dachra is a 2018 Tunisian horror film, written and directed by Abdelhamid Bouchnak as his first feature film.",posterURL:"https://upload.wikimedia.org/wikipedia/en/6/6a/Dachra-tunisian-movie-poster-md.jpg",rating:2, id: Math.random()},
    {title:"Rebelote", description:"This is the story of three Tunisians that nothing connects them in everyday life except for the fact that they are addicted to dating via Facebook", posterURL:"https://tunisie.co/uploads/images/content/rebelote-130220-1.jpg",rating:1, id:Math.random()},
    {title:"One Piece: Stampede", description:"The 14th One Piece film was released on August 9, 2019.[27] It was directed by Takashi Otsuka and was first announced following the broadcast of Episode of Skypiea. The film commemorates the anime's 20th anniversary", posterURL:"https://m.media-amazon.com/images/M/MV5BM2MxY2QwYTAtMDM1My00MTc0LWEwZjktMDdjODY2NWJiNDg2XkEyXkFqcGdeQXVyODY3ODQ2MTk@._V1_.jpg",rating:5, id: Math.random()},
    {title:"Fight Club", description:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", posterURL:"https://resizing.flixster.com/0kbkzWG-fGf5yEZSmLw4VB_SpnQ=/206x305/v2/https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",rating:3, id:Math.random()},
    {title:"John Wick: Chapter 4", description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.", posterURL:"https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg",rating:4, id: Math.random()},
    {title:"John Wick: Chapter 3", description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face", posterURL:"https://m.media-amazon.com/images/M/MV5BNzBhNjk1NDktZTRmNC00NzE0LWE0NzUtMjc4ZmUzYTEwZDUwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg",rating:4, id:Math.random()}

])
const [search,setSearch] = useState("")
const [rate,setRate] = useState(0)
const [validRate,setValidRate] = useState(false)
  return (
    <div>
      <NavMovie/>
      <AddMovie movies={movies} setMovies={setMovies}/>
      <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate} setValidRate={setValidRate}/>
      <ListMovie movies={movies} setMovies={setMovies} search={search} rate={rate} validRate={validRate}/>
    </div>
  );
}

export default App;
