import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRewiewsActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelectore';
import { useAuth } from '../../store/action-creators/auth';

const Rewiev: FC = () => {
    const { rewiews, error} = useTypedSelector(state => state.rewiews)
    const { deleteRewiew, getRewiews} = useRewiewsActions()
    const user = useAuth()

    useEffect(() => {
        getRewiews()
    }, [])

    if(error) {
        return <h1>{error}</h1>
    }
      
return (
<>
<div className="heading">
    <h1>Отзыв Клиента</h1>
    <p> <Link to={"/"} >Домашний</Link> Обзор </p>
</div>

<section className="info-container">
    <div className="info">
        <img src={require("../../css/image/icon-1.png") } alt="" />
        <div className="content">
            <h3>Быстрая Доставка</h3>
            <span>В Течение 30 Минут</span>
        </div>
    </div>

    <div className="info">
        <img src={require("../../css/image/icon-2.png") } alt="" />
        <div className="content">
            <h3>24/7 Доступно</h3>
            <span>Позвоните Нам В Любое Время</span>
        </div>
    </div>

    <div className="info">
        <img src={require("../../css/image/icon-3.png") } alt="" />
        <div className="content">
            <h3>Легкие Платежи</h3>
            <span>Наличные Или Кредит</span>
        </div>
    </div>

</section>

<section className="review">
    { 
    rewiews.map((item) => (
    <div className="box" key={item.id}>
        <div className="user">
            <img src={item.data().photoURL} />
            <div className="info">
                <h3>{item.data().displayName}</h3>
                <span>{item.data().email}</span>
                {
                   user?.email === item.data().email ? (
                    <i className='fas fa-trash'style={{fontSize: "15px"}}
                       onClick={() => deleteRewiew(item.id)}/>
                   ): null
                }
            </div>
        </div>
        <p>{item.data().text}</p>
    </div>
    ))
    }
</section>  
</>
)}

export default Rewiev;