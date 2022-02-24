import './Books.css';
import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => (
  <section className="book-list-container">
    <section className="book-list">
      <ItemBook
        title="Title 1"
        author="Author 1"
        categories="Category 1"
      />
      <ItemBook
        title="Title 2"
        author="Author 2"
        categories="Category 2"
      />
      <ItemBook
        title="Title 3"
        author="Author 3"
        categories="Category 3"
      />
    </section>
    <Form />
  </section>
);

export default Books;
