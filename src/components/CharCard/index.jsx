import './style.css';

function CharCard({ image, name, status, species }) {
    return(
        <>
            {status === "Alive" ? (
                <div className="AliveCharacter">
                    <p className="NameCharacter">{name <= name.substr(0, 15) ? name : name.substr(0, 15)+'...'}</p>
                    <span>Species: {species}</span>
                    <img src={image} alt={name} />
                    
                </div>
                
            ) : (
                <div className="DeadCharacter">
                    <p className="NameCharacter">{name <= name.substr(0, 15) ? name : name.substr(0, 15)+'...'}</p>
                    <span>Species: {species}</span>
                    <img src={image} alt={name} />
                </div>
            )}
        </>
    );
}

export default CharCard;