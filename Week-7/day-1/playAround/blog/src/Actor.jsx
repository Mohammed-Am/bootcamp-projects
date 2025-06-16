import './Actor.css';

const Actor = (props) => {
    return (
        props.actors.map(actor => (
            <>
            <ul  className = "container" style ={{border: '2px solid black' , backgroundColor: 'lightcyan'}} >
                <li>{actor.firstName}</li>
                <li>{actor.lastName}</li>
                <img src={actor.imageURL} alt="actorImg" width="150" />
            </ul>
            </>
        ))
    )
}

export default Actor;