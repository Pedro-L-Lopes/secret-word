// CSS
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// Components

const Home = () => {
  const [querry, setQuerry] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="ou busque por tags..." onChange={(e) => setQuerry(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <h3>{post.title}</h3>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
