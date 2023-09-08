import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'



const Detail = () => {
  const { id } = useParams();
  const [dogDetail, setDogDetail] = useState({}); 
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.thedogapi.com/v1/breeds/${id}?api_key=live_Pl5mtTASEwT9Aeyp3qF0ufP9lWwp1xDLWhzTPEvAHCFvVq1HxCYOJC8J5zU4gBjc`
      )
      .then(({ data }) => {
        if (data.name) {
          setDogDetail(data);
          const imageUrl = `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`;
          setDogImage(imageUrl);
        } else {
          alert("No hay perros con ese ID");
        }
      });
  }, [id]);


  

  return (
    <div className={style.container}>
      <img  className={style.img} src={dogImage} alt={dogDetail.name} />
      {dogDetail.name && <h2 className={style.name}>name: {dogDetail.name} </h2>}
      {dogDetail.height?.imperial && <h2 className={style.height}>height: {dogDetail.height?.imperial} </h2>}
      {dogDetail.weight?.imperial && <h2 className={style.weight}>weight: {dogDetail.weight?.imperial}</h2>}
      {dogDetail.temperament && <h2 className={style.temeprament}>temperament: {dogDetail.temperament}</h2>}
      {dogDetail.life_span && <h2 className={style.life}>life_span: {dogDetail.life_span} </h2>}
    </div>
  );
}

export default Detail;
