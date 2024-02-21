/* will be used for all http services */
import axios from "../utils/axios";
const getData = async (url) =>{
    const {data} = await axios.get(`${url}`)
    return data;
}


export {getData}