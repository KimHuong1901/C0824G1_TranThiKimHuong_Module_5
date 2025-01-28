import axios from "axios";
const getAllBooks = async () => {
    try{
        const result = await axios.get('http://localhost:8080/book');
        return result.data;
    } catch (error) {
        return [];
    }
}
 const saveBook = async (book) => {
    try {
        const result = await axios.post('http://localhost:8080/book', book);
        return true;
    } catch (error) {
        console.error("Error saving book: ", error.response ? error.response.data : error.message);
        return false;
    }
}
const deleteBook = async (bookId) => {
    try {
        const result = await axios.delete(`http://localhost:8080/book/${bookId}`);
        return true;
    } catch (error) {
        console.error("Error deleting book:", error);
        return false;
    }
}
const updateBook = async (book) => {
    try {
        const result = await axios.put(`http://localhost:8080/book/${book.id}/update`, book);
        return true;
    } catch (error) {
        console.error("Error updating book:", error);
        return false;
    }
};
export {getAllBooks, saveBook, deleteBook, updateBook};