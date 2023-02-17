import React from 'react'
import deleteBtn from '../assets/images/delete.jpg'

const TransactionItems = ({ orderedProducts, removeItem, grossTotal, vatAmount, netTotal, confirmTransaction }) => {
  return (
    <div className='transaction-details'>
      {orderedProducts.length ? (<>
        <label className='current-order'>CURRENT ORDER</label>
        {orderedProducts.map(product => (
          <div className='transaction-items' key={product.Name}>
            <div className='transaction-item'>{product.Name}</div>
            <div className='item-qty'>x{product.Qty}</div>
            <div className='item-price'>₱{(product.Price * product.Qty).toFixed(2)}</div>
            <div className='delete-item' onClick={() => removeItem(product)}><img src={deleteBtn} alt=''></img></div>
          </div>
        ))}
        <hr />

        <div className='price-breakdown'>
          <div className='totals'>
            <div className='totals-text'>SubTotal:</div>
            <div className='totals-amount'>₱{grossTotal ? grossTotal.toFixed(2) : 0.00}</div>
          </div>
          <div className='totals-vat'>
            <div className='totals-text'>(VAT):</div>
            <div>₱{(Math.round(vatAmount * 100) / 100).toFixed(2)}</div>
          </div>
          <div className='totals'>
            <div className='totals-text'><b>TOTAL:</b></div>
            <div className='totals-amount'>₱{(Math.round(netTotal * 100) / 100).toFixed(2)}</div>
          </div>

          <div className='complete-transaction'>
            <div className='complete-btn'>
            <button onClick={() => confirmTransaction()}>CONFIRM TRANSACTION</button>
            </div>
          </div>
        </div>
      </>) : 'No items added.'}
    </div>
  )
}

export default TransactionItems
