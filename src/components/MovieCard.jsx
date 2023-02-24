function MovieCard(props) {
  const {
    Title: title,
    Year: year,
    imdbID: imdbid,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div id={imdbid} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={
              "https://via.placeholder.com/468x500?text=Visit+Blogging.com+Now"
            }
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { MovieCard };
