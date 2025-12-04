
const Movielist = ({movies}) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="inline-block mr-4">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-48 h-auto rounded-md shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movielist
