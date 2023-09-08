import style from './Card.module.css'
const Card = (props) =>{
    return(
<div className={style.card}>
<img className={style.img}src={props.image} alt={props.name} />
<p className={style.name}>name:{props.name}</p>
<p className={style.temperament}>temperament:{props.temperament}</p>
<p className={style.weight}>weight: {props.weight}</p>
</div>
    )
}

export default Card