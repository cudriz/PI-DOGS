import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import {useSelector}  from "react-redux"


const CardsContainer = () =>{
   
  const dogs = useSelector(state=>state.dogs)
return (
  <div className={style.container}>
  {dogs.map((dog) => {
   
    const image= dog.image.url
    const nombre = dog.name;
    const temperament = dog.temperament;
    const peso = dog.weight?.imperial; 

    return (
      <Card
        key={dog.id}
        id={dog.id}
        image={image}
        name={nombre}
        temperament={temperament}
        weight={peso}
      />
    );
  })}
</div>
);
};
export default CardsContainer