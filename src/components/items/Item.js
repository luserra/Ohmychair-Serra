import './Item.css'
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import { useContext, useEffect } from 'react';

const Item = ({ item }) => {

    const {id, image, title, category, price, stock} = item;

   /*  const {cart, addProductToCart} = useContext(CartContext);

    useEffect(() => {
        console.log('Productos', cart)
    }, []);

    const addToCart = (e) => {
        e.stopPropagation()
        console.log("Productos en el carrito ", cart)
        addProductToCart(item)
    }
 */
    return(
        <>
            
                <div className='card-item'>
                <Link to={`/productos/${category}/${id}`}> 
                    <img className='img-item' src={`/assets/images/${image}`} alt={image} />
                </Link>
                    <h4 className='title-item'>{title}</h4>
                
                    <p className='category-item'>{category}</p>
                    <p className='price-item'>$ {price}</p>
                <Link to={`/productos/${category}/${id}`}>
                   <button className='btn-primary'>Ver detalle</button>
                </Link>
                  {/*  <button className='btn-primary' onClick={addToCart}>Agregar al carrito</button>  */}
                </div>
            
        </>
    )
}

export default Item;