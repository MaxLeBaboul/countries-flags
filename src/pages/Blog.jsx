import React, { useState, useEffect } from "react";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState("");
  const [blogData, setBlogData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles                          ")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      window.location.reload();
    }
  };
  return (
    <div className="blog-container">
      <h1>Blog</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafd" }}
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Articles key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;
