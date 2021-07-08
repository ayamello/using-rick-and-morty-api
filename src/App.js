import Characters from './components/Characters';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [characterList, setCharacterList] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => response.json())
        .then(response => {
            setCharacterList(response.results);
            setMaxPages(response.info.pages);
        })
        .catch(err => console.log(err));
    }, [page]);

    function nextPage() {
        if(page < maxPages) {
            setPage(page + 1);
            window.scrollTo({ top: 120, behavior: 'smooth' })
        }
    }

    function previousPage() {
        if(page > 1) {
            setPage(page - 1);
            window.scrollTo({ top: 120, behavior: 'smooth' })
        }
    }
 
    return(
        <div className="App">
            <Characters characterList={characterList} />
            
            <div className="BtnPages">
                <button onClick={previousPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>

            <footer>
                <p>Time-space travel</p>
            </footer>
        </div>
    );
}

export default App;