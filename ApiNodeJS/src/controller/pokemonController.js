import Pokemon from "../models/pokemon.js"; // Import the pokemon model

export const getPokemons = (req, res) => {
  Pokemon.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message:"La récupération des Pokémons a échoué."  });
    });
};

export const getPokemon= (request, response) => {
  const id = request.params.id ;
  Pokemon.findById(id)
    .then((result) => {
      response.json(result);
    })
    .catch((error) => {
      console.log(error)
      response.status(404).json({ message: "La récupération du Pokémon a échoué." });
    });
};


export const createPokemon = (request, response) => {
  const bodyContent = request.body;
  const newPokemon = new Pokemon(bodyContent);

  newPokemon
    .save()
    .then((result) => {
      response.status(201).json({ message: 'Pokémon créé avec succès', data: result });
    })
    .catch((error) => {
      console.log(error);
      response.status(404).json({ message: "La création du Pokémon a échoué."});
    });
};

export const udpatePokemon = (request, response) => {
  const id = request.params.id;
  const bodyContent = request.body

  Pokemon.findByIdAndUpdate(id, bodyContent)
  .then((result) => {
    response.json(result);
  })
  .catch((error) => {
    console.log(error);
    res.status(404).json({ message: "La mise à jour du Pokémon a échoué."  });
  });
};

export const deletePokemon = (request, response) => {
  const id = request.params.id;
  Pokemon.findByIdAndDelete(id)
  .then((result) => {
    response.json(result);
  })
  .catch((error) => {
    console.log(error);

    res.status(404).json({ message: "La suppression du Pokémon a échoué." });
  });
};