import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoRequset,addProduct,deleteProduct } from '../redux/action';

function Product() {
    const dispatch = useDispatch();
    const {products, loading, error} = useSelector(state => state);
    const [name, setName] = useState('');
    const [num, setnum] = useState(0);
    useEffect(() =>{

        dispatch(fetchTodoRequset());

    },[dispatch]);

    if(loading) return <p>loading</p>
    if(error) return <p>error : {error}</p>
    
    const handleAdd = () => {
        dispatch(addProduct({ name, num }));
        setName('');
        setnum('');
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

  return (
    <div>
    <h1>Product Table</h1>
    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <input placeholder="num" value={num} onChange={(e) => setnum(e.target.value)} />
    <button onClick={handleAdd}>Add Product</button>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>num</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product.pr_id}>
                    <td>{product.pr_id}</td>
                    <td>{product.name}</td>
                    <td>{product.num}</td>
                    <td>
                        <button onClick={() => handleDelete(product.pr_id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Product