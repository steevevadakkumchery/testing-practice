import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';

const Main = styled.main`
  padding: 2em;
  width: 600px;
`;

const ActionButton = styled.button`
  background-color: lightblue;
  border-radius: 1em;
  padding: 1em;
  cursor: pointer;
`;

function App() {
  const posts = <h3>To be added</h3>;
  return (
    <div className="App">
      <Header />
      <Main>
        <h1>Posts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ActionButton>Get Posts</ActionButton>

        {posts}
      </Main>
    </div>
  );
}

export default App;
