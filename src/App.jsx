import { useEffect, useState } from "react";
import "./App.css";
import { delay } from "./delay";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터를 잘 가지고 오는 지 체크용

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        await delay(500);
        const response = await fetch("/data/books.json");
        const data = await response.json();
        setBooks(data);

        console.log("load Complete");
      } catch (error) {
        console.error("Failed to fetch books", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book) => {
            return (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
