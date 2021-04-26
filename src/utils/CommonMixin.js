import axios from "axios";

export default function (){
  let responseData = null;
  const getJsonData = async function(file){
    try{
      responseData = await axios.get(file);
      let data = responseData.data;
      return { data }
    } catch (error){
      console.log(error);
    }
  }
  return { getJsonData };
}