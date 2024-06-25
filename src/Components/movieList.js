import MovieCard from "./movieCard";

const MovieList = ({movie})=> { 
    return (
        <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
            {movie.map((item,index)=>{
                return <MovieCard item={item} key={index}/>
            })}
            
        </div>
    )
}

export default MovieList;