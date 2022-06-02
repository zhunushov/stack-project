import  { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
 let [count, setCount] = useState(1)
  
 const increment = () => {
    if(count == 3)setCount(count -= 3)
    setCount(count + 1)
 }
 const decrement = () => {
    if(count == 1)setCount(count += 3)
    setCount(count-1)
 }

 return (
<>
<section className="home">
<div className="slides-container">
    <div className={`slide ${count === 1 ? "active" : null}`}>
        <div className="content">
            <span>Свежий И Органический</span>
            <h3>Скидка до 50% </h3>
            <Link to={"/shop"} className="btn">в магазин</Link>
        </div>
        <div className="image">
            <img src={require("../../css/image/home-img-1.png")} alt="" />
        </div>
    </div>
    <div className={`slide ${count === 2 ? "active" : null}`}>
        <div className="content">
            <span>Свежий И Органический</span>
            <h3>Скидка до 50% </h3>
            <Link to={"/shop"} className="btn">в магазин</Link>
        </div>
        <div className="image">
            <img src={require("../../css/image/home-img-2.png")} alt="" />
        </div>
    </div>
    <div className={`slide ${count === 3 ? "active" : null}`}>
        <div className="content">
            <span>Свежий И Органический</span>
            <h3>Скидка до 50% </h3>
            <Link to={"/shop"} className="btn">в магазин</Link>
        </div>
        <div className="image">
            <img src={require("../../css/image/home-img-3.png")} alt="" />
        </div>
    </div>
</div>
<button id="next-slide" className="fas fa-angle-right"onClick={increment}></button>
<button id="prev-slide" className="fas fa-angle-left"onClick={decrement}></button>
</section>

<section className="banner-container">
<div className="banner">
    <img src={require("../../css/image/banner-1.jpg")}alt="" />
    <div className="content">
        <span>Ограниченные Продажи</span>
        <h3>Скидка до 50% </h3>
        <Link to={"/shop"} className="btn">в магазин</Link>
    </div>
</div>
<div className="banner">
    <img src={require("../../css/image/banner-2.jpg")} alt="" />
    <div className="content">
        <span>Ограниченные Продажи</span>
        <h3>Скидка до 50% </h3>
        <Link to={"/shop"} className="btn">в магазин</Link>
    </div>
</div>
<div className="banner">
    <img src={require("../../css/image/banner-3.jpg")}alt="" />
    <div className="content">
        <span>Ограниченные Продажи</span>
        <h3>Скидка до 50% </h3>
        <Link to={"/shop"} className="btn">в магазин</Link>
    </div>
</div>
</section>
</>
)}

export default Home;