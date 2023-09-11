import style from './Search.module.css'

export const SearchBar = ()=>{
    return (
        <div className={style.search}>
            <input type="search" placeholder="Buscar Dogs"/>
            <button className={style.button}>Buscar</button>
        </div>
    )
}