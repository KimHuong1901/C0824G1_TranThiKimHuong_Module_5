import axios from "axios";
const getAllList = async () => {
    try{
        const response = await axios.get("http://localhost:8080/list");
        return response.data;
    } catch (error) {
        return [];
    }
}
 const saveList = async (list) => {
    try {
        const response = await axios.post("http://localhost:8080/list", list);
        return response.data;
    } catch (error) {
        return false;
    }
}
export {getAllList, saveList};