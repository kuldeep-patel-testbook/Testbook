import { useDispatch, useSelector } from 'react-redux';
import {fetchProduct} from '../app/features/products/productSlice';

const ProductList = () => {
    
    const state = useSelector(state => state);
    
    if(state.products.isLoading) {
        return <h1>Loading...</h1>
    }

    const dispatch = useDispatch();
    
  return (
    <div>
        <button onClick={() => dispatch(fetchProduct())}>Fetch Products</button>
        
        <h2>Product List Using Fetch API</h2>
        <ul>
        { state.products.data && state.products.data.map((item) => <li key={item.id}>{item.title}</li>) }
        </ul>
        
    </div>
  )
}

export default ProductList