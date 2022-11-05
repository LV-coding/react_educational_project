import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Пост 1", description: "Опис поста 1."},
    {id: 2, title: "Пост 2", description: "Опис поста 2."},
    {id: 3, title: "Пост 3", description: "Опис поста 3."},
  ])

  
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(), 
      title,
      description,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setDescription('')
  }

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="submit" placeholder="title" onClick={addNewPost}/>
      </form>

      <PostList posts={posts} title="Список постів"/>

    </div>
  );
}

export default App;
