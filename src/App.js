import React from 'react';
import Header from './components/Header';
import './App.scss';

function App() {
  const posts = <h3>To be added</h3>;
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Posts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button>Get Posts</button>

        {posts}
      </main>
    </div>
  );
}

export default App;
