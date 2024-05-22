import { Book } from "./components/Dialog/Dialog";
import axios from "axios";

export function getBooks() {
  return axios
    .get(" http://localhost:3000/books")
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Error fetching data: " + error);
    });
}

export function getBook(id: number) {
  return axios
    .get(`http://localhost:3000/books/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Error fetching data: " + error);
    });
}

export function addBook(book: Book) {
  return axios
    .post(`http://localhost:3000/books`, book)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Error fetching data: " + error);
    });
}

export function editBook(book: Book){
    return axios
    .put(`http://localhost:3000/books/${book.id}`, book)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Error updating data: " + error.message);
    });
}

export function deleteBook(id: number){
    return axios
    .delete(`http://localhost:3000/books/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error("Error updating data: " + error.message);
    });
}

export async function getGeneres() {
    const response = await axios.get("http://localhost:3000/books");
    if (!response.data) {
      throw new Error("Error fetching data");
    }
    const books = response.data as Book[];
    const genres = Array.from(new Set(books.map((book) => book.gatunek)));
    return genres;
}
  