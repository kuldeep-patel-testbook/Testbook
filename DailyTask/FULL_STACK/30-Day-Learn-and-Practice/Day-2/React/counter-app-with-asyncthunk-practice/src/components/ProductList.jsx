import React, { useMemo, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../app/features/products/productSlice';

const ProductList = memo(() => {

    const {isLoading, data} = useSelector(state => state.product);
   
    const dispatch = useDispatch();

    const productItems = useMemo(() => {
        return data && data.map(item => <li key={item.id}>{item.title}</li>)
    }, [data]);
    
    if(isLoading) return <h1>Loading...</h1>;

  return (
    <div>
        <button type='button' onClick={() => dispatch(fetchProduct())}> 🔍Fetch Product </button>
        <h1>Product List Using createAsyncThunk -- Fetch Products </h1>
        <ul>
        {
            productItems
        }
        </ul>
    </div>
  )
})

export default ProductList