import React from 'react';

const About = () => {
    return (
        <>
         <div className="heading">
    <h1>about us</h1>
    <p> <a href="home.html">home </a> about </p>
</div>

<section className="about">

    <div className="image">
        <img src={require("../../css/image/about-img.jpg")} alt="" />
    </div>

    <div className="content">
        <span>welcome to our shop</span>
        <h3>fresh and organic groceries</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p>
        <a href="#" className="btn">read more</a>
    </div>

</section>

<section className="gallery">

    <h1 className="title"> our <span>gallery</span> <a href="#">view all</a> </h1>

    <div className="box-container">

        <div className="box">
            <img src={require("../../css/image/gallery-img-1.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

        <div className="box">
            <img src={require("../../css/image/gallery-img-2.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

        <div className="box">
            <img src={require("../../css/image/gallery-img-3.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

        <div className="box">
            <img src={require("../../css/image/gallery-img-4.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

        <div className="box">
            <img src={require("../../css/image/gallery-img-5.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

        <div className="box">
            <img src={require("../../css/image/gallery-img-6.jpg")} alt="" />
            <div className="icons">
                <a href="#" className="fas fa-eye"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-share-alt"></a>
            </div>
        </div>

    </div>

</section>   
        </>
    );
};

export default About;