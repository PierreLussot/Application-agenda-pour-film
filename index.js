const calendar = new VanillaCalendar({
  selector: "#myCalendar",
  onSelect: (data, elem) => {
    selectedDate = new Date(data.date).toISOString().split("T")[0];
    //alert(`Vous avez sélectionné le ${selectedDate}`);
    displayMovie(selectedDate);
  },
  months: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mais",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],
  shortWeekday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
});

let selectedDate = {};

const movieForm = document.querySelector("#movie-form");
movieForm.addEventListener("submit", addMovie);

const movieList = document.getElementById("movie-list");

function addMovie(e) {
  e.preventDefault();
  const formData = new FormData(movieForm);
  const title = formData.get("title");
  const year = formData.get("year");
  const duration = formData.get("duration");
  const genre = formData.getAll("genre");
  const newMovie = {
    title,
    year: Number(year),
    duration,
    genre,
    date: selectedDate,
  };
  console.log("newMovie", newMovie);
  saveMovie(newMovie);
  movieForm.reset();
}

function saveMovie(movie) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies = [...movies, movie];
  localStorage.setItem("movies", JSON.stringify(movies));
}

function displayMovie(date) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  let movie = movies.find((m) => {
    return m.date === date;
  });

  if (movie) {
    movieList.innerHTML = `
    <div>
  <h3>${movie.title}</h3>
  <div>
    <span>Année: ${movie.year}</span>
    <span>Durée: ${movie.duration}</span>
    <span>Genre: ${movie.genre.join(", ")}</span>
  </div>
</div>
    
    `;
  }

  //console.log("movie", movie);
}
