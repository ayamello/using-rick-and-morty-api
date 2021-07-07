import { Fragment } from "react-is";
import CharCard from '../CharCard';
import './style.css';

function Characters(props) {
    const characterList = props.characterList;
    return(
        <Fragment>
            <header>
                <h1>Rick and Morty</h1>
                <h2>Characters</h2>
            </header>
            <main className="CharacterList">
                { characterList.map(character => 
                    <CharCard key={character.id}
                              image={character.image}
                              name={character.name} 
                              status={character.status} 
                              species={character.species}
                    />
                )}
            </main>
        </Fragment>
    );
}

export default Characters;