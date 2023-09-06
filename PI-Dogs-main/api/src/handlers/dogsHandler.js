const {
  getBreedById,
  getBreedByName,
  getAllDogBreeds,
  createDogDb,
  fetchTemperamentsFromApi,
  saveTemperamentsToDatabase,
} = require("../controllers/dogsControllers");

const getBreed = async (req, res) => {
  try {
    const dogBreeds = await getAllDogBreeds();
    res.status(200).json(dogBreeds);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const response = await getBreedById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dogByName = getBreedByName(name);
      res.status(200).json(dogByName);
    } else {
      res.status().json("no existe la raza solicitada");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createHandler = async (req, res) => {
  const { Nombre, Imagen, Altura, Peso, Añosdevida } = req.body;
  try {
    const newDog = await createDogDb(Nombre, Imagen, Altura, Peso, Añosdevida);
    res.status(200).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTemperaments = async (req, res) => {
  try {
    const temperamentsFromApi = await fetchTemperamentsFromApi();
    await saveTemperamentsToDatabase(temperamentsFromApi);
    res.status(200).json({ message: "Temperamentos guardados en la base de datos con éxito."});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBreed,
  getIdHandler,
  getNameHandler,
  createHandler,
  getTemperaments,
};
