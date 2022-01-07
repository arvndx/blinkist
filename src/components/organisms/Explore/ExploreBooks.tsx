import api from "../../configuration/api/BaseUrl";
import React, { useState, useEffect, useContext } from "react";
import BookGrid from "../Grid/BookGrid/BookGrid";
import CategoryContext from "../../pages/CategoryContext";
import { Container } from "@mui/material";

interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}

export default function ExploreBooks() {
  //   const [books, setBooks] = useState([]);

  //   const retriveBooks = async () => {
  //     const response = await api.get("/bookRepository");
  //     return response.data;
  //   };
  const bookList = useContext(CategoryContext);
  console.log(bookList);

  //     useEffect(() => {
  //     const getBooks = async () => {
  //       let isMounted = true;
  //       const allBooks = await retriveBooks();
  //       if (isMounted) {
  //         if (allBooks) {
  //           setBooks(allBooks);
  //         }
  //       }
  //       return () => {
  //         isMounted = false;
  //       };
  //     };
  //     getBooks();
  //   });

  //   const handleAddToLibrary = async (book: Ibook) => {
  //     // console.log(book);
  //     // handleRemove(book);
  //     const response = await api.post("/books", book);
  //     const allBooks = await retriveBooks();
  //     if (allBooks) {
  //       setBooks(allBooks);
  //     }
  //   };

  //   const handleRemove = async (book: Ibook) => {
  //     await api.delete(`/bookRepository/${book.id}`);
  //     const newBookList = books.filter((tempBook: Ibook) => {
  //       return book.id !== tempBook.id;
  //     });
  //     setBooks(newBookList);
  //     console.log("length : ", newBookList.length);
  //   };

  const handleClick = (book: Ibook) => {
    console.log(book);

    // handleAddToLibrary(book);
    // console.log(event);

    // bookHandler(event.target.value);
  };

  return (
    <Container>
      {bookList && (
        <BookGrid
          bookList={bookList}
          handleClick={handleClick}
          visible='inline'
        />
      )}
      {/* <h1>current Books</h1> */}
    </Container>
  );
}
