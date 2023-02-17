import React from 'react'
import Card from 'react-bootstrap/Card';
import apples from '../assets/images/apples.jpg'
import oranges from '../assets/images/oranges.jpg'
import lemons from '../assets/images/lemons.jpg'

const ProductsList = ({products, applesQty, orangesQty, lemonsQty, handleQuantity, addItem, orderedProducts}) => {
    return (
        <div className='product-list'>
        <div className='products-wrapper'>
        {products.map(product => (
        <Card key={product.Name} style={{ width: '18rem' }} className='product'>
            <Card.Img variant="top" className='item-image' src={product.Name === 'Apples' ? apples : product.Name === 'Oranges' ? oranges : lemons} />
            <Card.Body>
                <Card.Title>{product.Name.toUpperCase()}</Card.Title>
                <Card.Text className='product-price'>
                    ₱{product.Price.toFixed(2)}
                </Card.Text>

                <Card.Text className='item-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Card.Text>
                    <Card.Text>
                    <input type="number" className='product-qty' min="1"
                        value={product.Name === 'Apples' ? applesQty : product.Name === 'Oranges' ? orangesQty : lemonsQty}
                        onChange={(e) => handleQuantity(product, parseFloat(e.target.value))} />
                    <button className='add-btn' onClick={() => addItem(product)}>
                        {orderedProducts.find((orderedProduct) => orderedProduct.id === product.id) ?
                            'Update' : 'Add'}
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
          ))}
  </div>
  </div>
    )
}

export default ProductsList
