import  { FC } from 'react';
import { Link } from 'react-router-dom';

const ContactInfo: FC = () => {
    return (
<>
<div className="heading">
    <h1>Связаться С Нами</h1>
    <p> <Link to={"/"}>Домашний </Link> Контакт </p>
</div>
<section className="contact">
    <div className="icons-container">
        <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>Наш Номер</h3>
            <p>+123-456-7890</p>
            <p>+111-222-3333</p>
        </div>
        <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>Наша Электронная Почта</h3>
            <p>zhunushov#gmail.com</p>
            <p>zhunushovabbas@gmail.com</p>
        </div>
        <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Наш Адрес</h3>
            <p>bishkek kyrguzstan 7458</p>
        </div>
    </div>
    <div className="row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23393.167373958608!2d74.58106954113079!3d42.86976411904102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1648314730465!5m2!1sru!2skg" width="1200" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
</>
)}
export default ContactInfo;