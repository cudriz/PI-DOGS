import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={props.image} alt={props.name} />
      <Link to={`/detail/${props.id}`}>
        <p className={style.name}>name:{props.name}</p>
      </Link>

      <p className={style.temperament}>temperament:{props.temperament}</p>
      <p className={style.weight}>weight: {props.weight}</p>
    </div>
  );
};

export default Card;
