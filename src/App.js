import Characters from './components/Characters';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [characterList, setCharacterList] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => response.json())
        .then(response => setCharacterList(response.results))
        .catch(err => console.log(err));
    }, [page]);

    console.log(characterList);

    function nextPage() {
        setPage(page + 1);
    }

    function previousPage() {
        if(page > 1) {
            setPage(page - 1);
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