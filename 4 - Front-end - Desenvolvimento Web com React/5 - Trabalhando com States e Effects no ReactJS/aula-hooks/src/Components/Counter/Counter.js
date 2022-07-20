import { Fragment } from "react"

function Counter() {
  let quantity = 10;

  function upQuantity() {
    quantity = quantity + 1
    document.getElementById("counter-box").innerHTML = quantity
    console.log(quantity)
  }

  return (
    <Fragment>
      <h1 id="counter-box">{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </Fragment>
  )

}

export default Counter