import Card from "../Card/Card"
import style from './CardsContainer.module.css'



const CardsContainer = ({cards}) =>{
   
  
return (
  <div className={style.container}>
  {cards.map((dog) => {
   
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