const Form = ( )=>{
    return (
        <form>
        <h1>Create your new dog</h1>

        <div>
            <label>Nombre:  </label>
            <input type="text" />
        </div>

        <div>
            <label>Altura:  </label>
            <input type="text" />
        </div>

        <div>
            <label>Peso:  </label>
            <input type="text" />
        </div>

        <div>
            <label>Añosdevida:  </label>
            <input type="text" />
        </div>

        <div>
            <label>Imagen:  </label>
            <input type="text" />
        </div>

        <button>CREATE</button>
        </form>
    )
}

export default Form