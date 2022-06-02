import { FC, useState } from 'react';
import { useProductActions } from '../hooks/useActions';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddProduct: FC = () => {
    const navigate = useNavigate()
    const { addProduct, getProduct } = useProductActions()
    const uuid = uuidv4
    const [values, setValues] = useState<any>({
        type: '', title: "", price: 0,
        photo: "", 
        id: uuid()
    })
    const handleSubmit = (event: any) => {
        event.preventDefault()
        for(let key in values){
            if(!values[key]){
                alert("Заполните поля");
                return 
            }
        }
        addProduct(values)
        getProduct('')
        setValues({title: '', price: 0, type: '', photo: ''})
        navigate("/shop")
    }
return (
    <section className="contact" style={{marginTop: '30px'}}>
        <div className='row'>
            <form action="" onSubmit={handleSubmit}>
            <h3>добавить продукты</h3>
            <div className="inputBox">
                <input value={values.title} 
                 onChange={e => setValues({...values, title: e.target.value})} 
                 type="text" placeholder="введите title" className="box" />
                <input value={values.price} 
                 onChange={e => setValues({...values, price: +e.target.value})} 
                 type="number" placeholder="введите price" className="box" />
            </div>
            <div className="inputBox">
                <input value={values.type} 
                 onChange={e => setValues({...values,type: e.target.value})}
                 type="text" placeholder="введите type" className="box" />

                <input value={values.photo} 
                 onChange={e => setValues({...values, photo: e.target.value})} 
                 type="text" placeholder="введите image" className="box" />
            </div>
            <input type="submit"  value="Add Product" className="btn" />
          </form>
         <img src="https://source.unsplash.com/user/c_v_r"  width="550" height="300"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    </section>
    );
};

export default AddProduct;