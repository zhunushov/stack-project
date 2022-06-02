import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRewiewsActions } from '../../hooks/useActions';
import { useAuth } from '../../store/action-creators/auth';


const Footer: FC = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const { addRewiew } = useRewiewsActions()
    const [values, setValues] = useState({text: ''})
    
    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(!values.text.trim()) {
            alert("заполните поля")
            return
        }
        if(!auth) {
            alert("вам необходимо зарегистрироваться")
            return
        }
        const elem: object = {
            text: values.text,
            createdAt: new Date(),
            uid: auth?.uid,
            email: auth?.email,
            photoURL: auth.photoURL ? auth.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhSXSznpKjRjkVSDai0I22GlBHMcVXHPjZg&usqp=CAU',
            displayName: auth?.displayName
        }
        addRewiew(elem)
        setValues({text: ""})
        navigate('/rew')
    }

return (
<section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>quick links</h3>
            <Link to={"/"}> <i className="fas fa-arrow-right"></i> home</Link>
            <Link to={"shop"}> <i className="fas fa-arrow-right"></i> shop</Link>
            <Link to={"about"}> <i className="fas fa-arrow-right"></i> about</Link>
        </div>

        <div className="box">
            <h3>extra links</h3>
            <Link to={"rew"}> <i className="fas fa-arrow-right"></i> review</Link>
            <Link to={"blog"}> <i className="fas fa-arrow-right"></i> blog</Link>
            <Link to={"contact"}> <i className="fas fa-arrow-right"></i> contact</Link>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <Link to={"/"}> <i className="fab fa-facebook-f"></i> facebook </Link>
            <Link to={"/"}> <i className="fab fa-instagram"></i> instagram </Link>
            <Link to={"/"}> <i className="fab fa-pinterest"></i> pinterest </Link>
        </div>

        <div className="box">
            <h3>отпарвить отзыв</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="введите отзыв" value={values.text} 
                style={{marginBottom: "10px"}}
                 onChange={e => setValues({...values, text: e.target.value})}/>
                <input type="submit" value="отправить" className="btn" />

            </form>
            <img src={require("../../css/image/payment.png")} className="payment" alt="" />
        </div>
        
    </div>
</section>
)}

export default Footer;