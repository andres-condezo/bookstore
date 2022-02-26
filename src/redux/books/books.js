// CONST
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cqD5QO562asKUUJ072XW/books';

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOK:
      return [...state, action.payload];

    default:
      return state;
  }
};

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const sentBook = (payload) => (
  async (dispatch) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: {
          bookTitle: payload.title,
          bookAuthor: payload.author,
        },
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

export const deleteBook = (id) => (
  async (dispatch) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    if (response.status === 201) {
      dispatch(removeBook(id));
    }
  }
);

export const getBook = async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const books = Object.entries(data);
  books.forEach((item) => {
    const [id, value] = item;
    const { title, category } = value[0];
    const { bookTitle, bookAuthor } = title;

    const newBook = {
      id,
      title: bookTitle,
      author: bookAuthor,
      category,
    };
    dispatch(addBook(newBook));
  });
};

export default booksReducer;
