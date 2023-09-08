import axios from 'axios'


export const GET_DOGS = "GET_DOGS"

export const getDogs = () => {
    return async function (dispatch) {
        const info = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=live_Pl5mtTASEwT9Aeyp3qF0ufP9lWwp1xDLWhzTPEvAHCFvVq1HxCYOJC8J5zU4gBjc");
        const dogs = info.data
        dispatch({type: GET_DOGS, payload: dogs})
    }
}