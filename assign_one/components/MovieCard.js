const MovieCard = ({ color, poster, name, year, description }) => {
  return (
    <>
      <div
        className="movie-card"
        style={{
          background: `linear-gradient(to left, ${color} 5%, #373d5f 95%)`,
        }}
      >
        <div className="movie-poster">
          <img src={poster} alt={name} />
        </div>

        <div className="movie-info">
          <h1 className="movie-name">{name}</h1>
          <p className="movie-year">{year}</p>
          <p className="movie-description">{description}</p>
        </div>
      </div>
    </>
  );
};
