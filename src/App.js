import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}{post.score}{post.author}</li>

        })}
      </ul>
    </div>
  );
}

export default App;
