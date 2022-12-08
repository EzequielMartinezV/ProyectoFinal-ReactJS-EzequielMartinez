import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = (product) => {
  return (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} />
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
  )
}

export default Item;