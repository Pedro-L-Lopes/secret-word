import styles from "./Search.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"
import { Link } from "react-router-dom"

import PostDetail from "../../components/PostDetail"

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search) 

  return (
    <div className={styles.search_container}>
        <h2>Resultado da busca</h2>
        <div>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrados post</p>
                    <Link to="/" className="btn btn-dark">
                        Voltar
                    </Link>
                </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search


// Coleta
// Campos
// tags Matrizes createAd Decrescente __name__ Decrescente