import { useParams } from "react-router-dom"
import {useFetch} from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Product = () => {
  // 4 Rota dianamica 
  const { id } = useParams()

  // 5 Carregamento de dado individual
  const url = "http://localhost:3000/products/" + id
    const {data: Product, loading, error} = useFetch(url)

    return (
      <div>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {Product && (
          <div>
            <h1>{Product.name}</h1>
            <p>R$: {Product.price}</p>
            {/* 6 Nestd routes */}
            <Link to={`/products/${Product.id}/info`}>Mais informações</Link>
          </div>
        )}  
      </div>
    )
  }
  
export default Product     