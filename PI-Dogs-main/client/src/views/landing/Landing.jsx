import {Link} from 'react-router-dom'
import style from './Landing.module.css'
const Landing = ( )=>{
    return (
        <div className={style.container}>
        <h1 className={style.welcome}>WELCOME!</h1>
        <Link to='/home'>
        <button className={style.button}>GO!</button>
        </Link>
        
        </div>
    )
}

export default Landing