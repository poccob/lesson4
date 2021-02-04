import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import AboutPage from './pages/AboutPage';
import FullPostPage from './pages/FullPostPage';
import HomePage from './pages/HomePage';

const initialState = {
  posts: [],
};

const pathName = window.location.pathname;

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get('https://5c3755177820ff0014d92711.mockapi.io/posts');
      dispatch({ type: 'SET_POSTS', payload: data });
    }

    fetchPosts();
  }, []);

  const searchPosts = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    async function fetchPostsSearch() {
      const { data } = await axios.get(
        'https://5c3755177820ff0014d92711.mockapi.io/posts?title=' + inputValue,
      );
      !data.length ? alert('поиск ничего не дал') : dispatch({ type: 'SET_POSTS', payload: data });
    }
    fetchPostsSearch();
  };

  return (
    <Container>
      {pathName === '/' && <HomePage posts={state.posts} search={searchPosts} />}
      {pathName === '/about' && <AboutPage />}
      {pathName.includes('/post/') && <FullPostPage />}
    </Container>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default App;
