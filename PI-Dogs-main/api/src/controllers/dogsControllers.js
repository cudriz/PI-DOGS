require("dotenv").config();
const axios = require("axios");
const { Dogs, Temperaments } = require("../db");
const apiUrl = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env;

const getAllDogBreeds = async (req, res) => {
  const response = await axios.get(apiUrl);
  return response.data.map((dog) => ({ name: dog.name }));
};
const getBreedById = async (id, source) => {
  const dog =
    source === "api"
      ? (await axios.get(`${apiUrl}/${id}`)).data
      : await Dogs.findByPk(id, {
          include: {
            model: Temperaments,
            attributes: ["Nombre"],
          },
        });

  return dog;
};

const infoCleaner = (array) => {
  return array.map((element) => {
    return {
      id: element.id,
      image: element.image,
      name: element.name,
      created: false,
    };
  });
};

const getBreedByName = async (name) => {
  const infoApi = await axios.get(
    `${apiUrl}/search?q=${name}&api_key=${API_KEY}`
  ).data;

  const dogsApi = infoCleaner(infoApi);

  const dogsFiltered = dogsApi.filter((dog) => dog.name === name);

  const userDb = await Dogs.findAll({ where: { name: name } });

  return [...dogsFiltered, ...userDb];
};

const createDogDb = async (Nombre, Imagen, Altura, Peso, Añosdevida) => {
  const dog = await Dogs.create({ Nombre, Imagen, Altura, Peso, Añosdevida });

  return dog;
};

const fetchTemperamentsFromApi = async () => {
  const response = await axios.get(`${apiUrl}`);
    if (response.status !== 200) {
      throw new Error(
        "No se pudo obtener la lista de razas de perros de la API."
      );
    }

    const dogBreeds = response.data;

    // Verificar si hay datos de temperamento en cada raza
    const allTemperaments = new Set();
    dogBreeds.forEach((breed) => {
      if (breed.temperament) {
        // Dividir la cadena de temperamentos y agregarlos al conjunto
        const temperamentArray = breed.temperament.split(",").map((item) => item.trim());
        temperamentArray.forEach((temperament) => allTemperaments.add(temperament));
      }
    });

    // Convierte el conjunto de temperamentos en un arreglo
    const temperamentsArray = [...allTemperaments];

    return temperamentsArray;
  }

const saveTemperamentsToDatabase = async (temperaments) => {
  await Temperaments.bulkCreate(temperaments.map((name) => ({ name })));
  console.log("Temperamentos guardados en la base de datos con éxito.");
};

module.exports = {
  getAllDogBreeds,
  getBreedById,
  getBreedByName,
  createDogDb,
  fetchTemperamentsFromApi,
  saveTemperamentsToDatabase,
};
