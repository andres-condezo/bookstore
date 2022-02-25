import { useSelector } from 'react-redux';
import './Books.css';
import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className="book-list-container">
      <section className="book-list">
        {
          bookList.map((book) => (
            <ItemBook
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.category}
            />
          ))
        }
      </section>
      <Form />
    </section>
  );
};

export default Books;
