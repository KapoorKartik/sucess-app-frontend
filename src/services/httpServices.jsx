/* will be used for all http services */
import axios from "../utils/axios";
import Swal from "sweetalert2";
const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const postData = async (url, data) => {
  try {
    const res = await axios.post(url, data);
    console.log('res:', res)
    return res;

  }catch(err){
    console.log('err:', err)
    Swal.fire("Oops...", err.message || "Something went wrong!", "error");
  }
};

export { getData, postData };
