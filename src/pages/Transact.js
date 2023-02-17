import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import TransactionItems from '../components/TransactionItems';

const Transact = () => {
  const [productList] = useState([
    { id: '1', Name: 'Apples', Price: 29.99 },
    { id: '2', Name: 'Oranges', Price: 35.00 },
    { id: '3', Name: 'Lemons', Price: 40.00 }]);

  const [orderedProductList, setOrderedProductList] = useState([]);
  const [applesQty, setApplesQty] = useState(1);
  const [orangesQty, setOrangesQty] = useState(1);
  const [lemonsQty, setLemonsQty] = useState(1);
  const [grossTotal, setGrossTotal] = useState();
  const [netTotal, setNetTotal] = useState();
  const [vatAmount, setVatAmount] = useState();

  const removeItem = (product) => {
    const existing = orderedProductList.find((x) => x.id === product.id);
    if (existing) {
      const newOrderedProductList = orderedProductList.filter((orderedProduct) => orderedProduct.id !== product.id);
      setOrderedProductList(newOrderedProductList);
      if (product.Name === 'Apples') {
        setApplesQty(0);
      }
      if (product.Name === 'Oranges') {
        setOrangesQty(0);
      }
      if (product.Name === 'Lemons') {
        setLemonsQty(0);
      }
    }
  }

  const addItem = (product) => {
    const newQuantity = product.Name === 'Apples' ? applesQty :
      product.Name === 'Oranges' ? orangesQty : lemonsQty;
    if (newQuantity !== 0) {
      const existing = orderedProductList.find((x) => x.id === product.id);
      if (existing) {
        const newOrderedProductList = orderedProductList.map((orderedProduct) =>
          orderedProduct.id === product.id ? { ...existing, Qty: newQuantity } : orderedProduct);
        setOrderedProductList(newOrderedProductList);
      }
      else {
        const newOrderedProductList = [...orderedProductList, { ...product, Qty: newQuantity }]
        setOrderedProductList(newOrderedProductList);
      }
    }
    else {
      removeItem(product);
    }
  }

  const handleQuantity = (product, qty) => {
    product.Name === 'Apples' ? setApplesQty(qty) :
      product.Name === 'Oranges' ? setOrangesQty(qty) :
        setLemonsQty(qty);
  }

const confirmTransaction = () => {
  let dateToday = new Date().getMonth() + 1 + '-' + new Date().getDate() + '-' + new Date().getFullYear();
  const transactionId = (Math.floor(100000 + Math.random() * 900000));
  let items = '';
  orderedProductList.map(product => {
    if(orderedProductList.indexOf(product) === 0) {
       items = product.Name
    }
    else {
    items = items + ',' + product.Name;
    }
    return items;
  })
  var retrievedObject = localStorage.getItem("transactionList");
  var stored = JSON.parse(retrievedObject);
  const data = [];
  if (stored){
  stored.map(storedata => {
    data.push(storedata)
    return null;
  })
}
  data.push({transactionId: transactionId, NetTotal: netTotal, DateToday: dateToday, Products: items})
  localStorage.setItem('transactionList', JSON.stringify(data));

  if (data) {
    alert('Transaction complete!')
    setTimeout(() => window.location.reload(), 500) 

  }
}
  useEffect(() => {
    let gross = 0; let net = 0; let vat = 0;
    orderedProductList.map(product => {
      return gross = parseFloat(gross) + (product.Price * product.Qty);
    })
    vat = gross * .12;
    net = gross + vat;
    setGrossTotal(gross)
    setVatAmount(vat)
    setNetTotal(net)
  }, [orderedProductList]);
  
  return (
    <div className='transaction-page-wrapper'>
      <ProductsList products={productList} applesQty={applesQty} orangesQty={orangesQty} lemonsQty={lemonsQty}
        handleQuantity={handleQuantity} addItem={addItem} orderedProducts={orderedProductList} />

      <TransactionItems orderedProducts={orderedProductList} removeItem={removeItem}
      grossTotal={grossTotal} vatAmount={vatAmount} netTotal={netTotal} confirmTransaction={confirmTransaction}/>
    </div>
  )
}

export default Transact
