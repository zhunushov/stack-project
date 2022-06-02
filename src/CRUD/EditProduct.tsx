import { FC, useMemo, useState } from 'react';
import { useProductActions } from '../hooks/useActions';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelectore';

type ParamsId = {
    id: string
}
const EditProduct: FC = () => {
    const navigate = useNavigate()
    const { edit } = useTypedSelector(state => state.product)
    const { saveProduct , getProduct, updateProduct } = useProductActions()
    const { id } = useParams<ParamsId>()
    
    const [values, setValues] = useState<any>({
        title: "", price: 0,  type: '',
        photo: "", 
        id: uuidv4()
    })

    useMemo(() => {
       if(id) {
        updateProduct(id)
       }
    }, [id])
    useMemo(() => {
        if(edit){
            setValues(edit)
        }
    }, [edit])


    const handleSubmit = (event: any) => {
        event.preventDefault()
        for(let key in values){
            if(!values[key]){
                alert("Заполните поля");
                return 
            }
        }
        saveProduct(id,values)
        getProduct('')
        setValues({title: '', price: 0, type: '', photo: ''})
        navigate("/shop")
    }
return (
    <section className="contact" style={{marginTop: '30px'}}>
        <div className='row'>
            <form action="" onSubmit={handleSubmit}>
            <h3>редактировать продукты</h3>
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
            <input type="submit"  value="Save Product" className="btn"/>
          </form>
         <img src="https://source.unsplash.com/user/c_v_r"  width="550" height="300"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
    </section>
    );
};

export default EditProduct;