import  { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartActions, useFovaritesActions, useProductActions } from '../hooks/useActions';
import { useAuth } from '../store/action-creators/auth';

interface CartProps {
    item: any
}

const ProductCard: FC<CartProps> = ({item}) => {

    const navigate = useNavigate()
    const { addCartProduct, checkProductCart } = useCartActions()
    const { addFovarites,  checkFovarites } = useFovaritesActions()
    const { deleteProduct } = useProductActions()
    const user = useAuth()
    
return (
<>
    {
    <div className="box" style={{maxWidth: 450}} key={item.data().id}>

        <div className="icons">
            {
                user?.email === "admin@gmail.com" ? (
                   <>
                   <a className="fas fa-times"
                     onClick={() =>  deleteProduct(item.id)}
                   />
                   <a className='fas fa-pen'
                    onClick={() => navigate(`/edit/${item.id}`)}
                   />
                   </>
                ): (
                    <>
                    <a className="fas fa-shopping-cart"
                      style={checkProductCart(item.data().id)  
                      ? {color: "red"} : {color: 'green'}}
                      onClick={() => { 
                      addCartProduct(item.data())
                      checkProductCart(item.data().id)
                    }}/>

                    <a className="fas fa-heart" 
                      style={checkFovarites(item.data().id) ? {color: "red"} : {color: "green"}}
                      onClick={() =>{ addFovarites(item.data()) 
                      checkFovarites(item.data().id)
                    }}/>
                    </>
                )
            }
        </div>

        <div className="image">
            <img src={item.data().photo} alt={item.data().title}/>
        </div>

        <div className="content">
            <h3>{item.data().title}</h3>
            <div className="price">$: {item.data().price}</div>
        </div>

    </div>
    }
</>
)};

export default ProductCard;