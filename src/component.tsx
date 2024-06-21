const Component = () => {
  // ce composant est pur
  const myMovies = [];

  // on modifie une list créée à l'intérieur du
  // composant. Donc c'est bon, il reste pur
  myMovies.push("film 1");
  myMovies.push("film 2");
  myMovies.push("film 3");

  const componentTitle = "Mes films";

  return (
    <div>
      <h1>{componentTitle}</h1>
      {myMovies.map((movie) => (
        <>{movie}</>
      ))}
    </div>
  );
};

export default Component;
