import Film from './film.js'

const FilmList = ({films}) => {

    const filmReleases = films.map( film =>{

        return(
            <Film key = {film.id}><a href='{film.url}'>{film.name}</a></Film>
        )
    })
    
    return (
        <>
        <ul>
            {filmReleases}
        </ul>
        </>
    )
    };

    export default FilmList;