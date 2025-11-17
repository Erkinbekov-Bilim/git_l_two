const movies = [
  {
    id: 1,
    poster:
      "https://m.media-amazon.com/images/I/61eML5bDDyL._AC_UF894,1000_QL80_.jpg",
    name: "Adventure Time",
    year: 2010,
    description:
      "Adventure Time is an animated series about the adventures of Finn, a human boy, and his magicalshapeshifting dog, Jake, in the post-apocalyptic Land of Ooo.",
    color: "#556394ff",
  },
  {
    id: 2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_FMjpg_UX1000_.jpg",
    name: "The Hateful Eight",
    year: 2015,
    description:
      "When a bounty hunter and his captured fugitive are caught in the middle of a snowstorm in Wyoming, they encounter a twisted turn of events as they seek refuge in a small lodge.",
    color: "#ac2b2bff",
  },
  {
    id: 3,
    poster:
      "https://images.moviesanywhere.com/5f0537520f90b687fc5db7f241affc4c/842c4e03-abee-4260-a170-bff52e63519a.jpg",
    name: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    description:
      "Harry, Ron and Hermione set out on a quest to eliminate the remaining horcruxes. On the other hand, the students and teachers must unite to defend Hogwarts against Lord Voldemort and his minions.",
    color: "#12121fff",
  },
  {
    id: 4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    name: "Arcane",
    year: 2021,
    description:
      "'Arcane' can describe something that is mysterious, secret, or known only to a few, and it is also used to describe magic, especially in fantasy and gaming contexts. The Netflix series Arcane uses the term to describe the magical energies that are harnessed through technology (hextech) in its world. ",
    color: "#97345aff",
  },
  {
    id: 5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmY5ZmY1ZWItYjMwMy00ZmYyLTlkNmItNjdmZGJjNmNjNWUwXkEyXkFqcGc@._V1_.jpg",
    name: "Common Side Effects",
    year: 2025,
    description:
      "Two former high school lab partners stumble on a mushroom that can heal almost anything, apart from the corporate interests of the DEA, big pharma, and international businessmen.",
    color: "#235666ff",
  },
];

const App = (
  <>
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          poster={movie.poster}
          name={movie.name}
          year={movie.year}
          description={movie.description}
          color={movie.color}
        />
      ))}
    </div>
  </>
);

const root = document.querySelector("#app");
ReactDOM.render(App, root);
