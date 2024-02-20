/* will be used for all http services */
import axios from "../utils/axios";
const getData = async (url) =>{
    const res = await axios.get(`${url}`)
}


export {getData}