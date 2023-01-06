//import { useContext } from "react"

//import {CounterContext} from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

// 4 Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"


const Products = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 Alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Products