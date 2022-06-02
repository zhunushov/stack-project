import { FC } from 'react';
import { Link } from 'react-router-dom';

const Blog: FC = () => {
    return (
    <section className="blogs">

    <h1 className="title"> our <span>blogs</span> <Link to={'/'}>view all </Link> </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-1.jpg")} alt="" />
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-2.jpg")} alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-3.jpg")} alt=''/>
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-4.jpg")} alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-5.jpg")} alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={require("../../css/image/blog-6.jpg")} alt=""/>
            </div>
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blogs title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

    </div>

</section>
    );
};

export default Blog;