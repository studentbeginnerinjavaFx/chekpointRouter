import Nav from "./component/Nav";
import MovieContainer from "./component/MovieContainer";
import { useState } from "react";
import AddMovie from "./component/AddMovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDescription from "./component/MovieDescription";

function App() {
  const [movies, setmovies] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      rating: 4,
      description:
        "Depuis la mort de sa femme bien-aimée, John Wick passe ses journées à retaper sa Ford Mustang de 1969, avec pour seule compagnie sa chienne Daisy.",
      trailer: "https://www.youtube.com/watch?v=sZVb0BcJt6c",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
      description:
        "Avatar est un film de science-fiction américain réalisé par James Cameron, sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.",
      trailer: "https://www.youtube.com/watch?v=ZM2k1UmcCXg",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
      description:
        "Iron Man est un film américain réalisé par Jon Favreau, sorti en 2008. Il raconte les origines et les débuts du personnage éponyme",
      trailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
      description:
        "The Batman est un film réalisé par Matt Reeves avec Robert Pattinson, Zoë Kravitz. Synopsis : Deux années à arpenter les rues en tant que Batman ",
      trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
      description:
        "Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name. Distributed by 20th Century Fox, it is a spin-off in the",
      trailer: "",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      rating: 3,
      description:
        "En 1996 , à Brantford (New Hampshire), un père trouve une boîte d'un jeu de société, Jumanji, sur une plage (voir le film de 1995) et la ramène à son fils",
      trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
      description: "Vikings est une série télévisée canado-irlandaise créée par Michael Hirst, diffusée simultanément entre le 3 mars 2013 et le 30 décembre 2020 sur les",
      trailer: "https://www.youtube.com/watch?v=9GgxinPwAGc",
    },
  ]);

  const [input, Setinput] = useState("");

  const handleInput = (e) => {
    Setinput(e.target.value);
  };

  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const [show, setshow] = useState(false);

  const handleModal = () => {
    setshow(!show);
  };

  const [newMovie, setnewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    rating: 0,
  });

  const handleNewMovie = (e) => {
    if (e.target.name === "rating") {
      setnewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    } else {
      setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
  };

  const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setmovies([...movies, newMovie]);
      handleModal();
    } else {
      alert("rating between 1 and 5");
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          input={input}
          handleInput={handleInput}
          rating={rating}
          handleRating={handleRating}
          handleModal={handleModal}
        />
        <Switch>


                    <Route  path="/MovieDescription/:id">
                      <MovieDescription movies={movies} />
                    </Route>


                     <Route exact path="/">
                        <MovieContainer movies={movies} input={input} rating={rating} />
                        <AddMovie
                          show={show}
                          handleModal={handleModal}
                          newMovie={newMovie}
                          handleNewMovie={handleNewMovie}
                          handleAddMovie={handleAddMovie}
                      />
                    </Route>


                   

                 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
