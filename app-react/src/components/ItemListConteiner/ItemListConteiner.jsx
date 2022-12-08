import { useState } from "react"
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { gFetch } from "../../helper/gFetch";



const ItemListConteiner = ({}) => {
const [products, setProduct] = useState([])
const [loading, setLoading] = useState(true)
 useEffect(()=>{
   gFetch()
   .then(res => setProduct(res))
   .catch(err => err)
   .finally(()=>setLoading(false))

 },[])

console.log(products)
  return (
    <section>
      { loading ? 
        <h2>Cargando...</h2> 
      : 
      products.map( (product) => 
      <Card key={product.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-black">{product.nombre}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{product.tipo}</Card.Subtitle>
        {/* <Card.Text className="mb-2 text-muted">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
      
      ) }
    </section>
  )
}

export default ItemListConteiner