import Navbar from 'react-bootstrap/Navbar'

const CartWidget = ({itemsCount}) => {
  return (
    <>
    <Navbar.Brand href="#home">
    <img
      src="../src/assets/carrito.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="ClickReactJS logo"
    />
  </Navbar.Brand>
  <Navbar.Text>{itemsCount}</Navbar.Text>
</>
  )
}

export default CartWidget