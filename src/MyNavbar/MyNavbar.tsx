import { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthActions, useCartActions, useFovaritesActions, useProductActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectore';
import GoogleButton from 'react-google-button'
import { useAuth } from '../store/action-creators/auth';

const MyNavbar: FC = () => {
    // toggle
  const [searchToggleButton, setSearchToggleButton] = useState(false)
  const [loginToggleButton, setLoginToggleButton] = useState(false)
  const [menuToggleButton, setMenuToggleButton] = useState(false)
  const [cartToggleButton, setCartToggleButton] = useState(false)
  const [fovaritesToggleButton, setFovaritesToggleButton] = useState(false)
  const [isLoginButton, setIsLoginButton] = useState(false)

  const { fovarites } = useTypedSelector(state => state.fovarites)
  const { cart, error } = useTypedSelector(state => state.cart)

  const { changeCountProduct, getCartProduct, deleteProductCart } = useCartActions()
  const { googleAuth, logout, signUp, signIn } = useAuthActions()
  const { deleteFovarites, getFovarites } = useFovaritesActions()
  const { getProduct } = useProductActions()

  const [authValue, setAuthValue] = useState({email: "", password: ""})
  const [search, setSearch] = useState('')
  const user = useAuth()
  
    useMemo(()=> {
      getProduct(search)
      return () => {
          getProduct('')
      }
    },[search])

    useEffect(() => {
       getCartProduct()
       getFovarites()
       return  () => {
          getCartProduct()
          getFovarites()
      }
    }, [])

    if(error){
     return <h1>{error}</h1>
    }

    const handleSignIn = (event: any) => {
        event.preventDefault()
        if(!authValue.email || !authValue.email){
            alert("заполните все поля")
            return
        }
        signIn(authValue.email, authValue.password)
        setAuthValue({email: "", password: ""})
    }
    const handleSignUp = (event: any) => {
        event.preventDefault()
        if(!authValue.email || !authValue.email){
            alert("заполните все поля")
            return
        }
        signUp(authValue.email, authValue.password)
        setAuthValue({email: "", password: ""})
    }

return (
<header className="header">
    <Link to="/" className="logo"><i className="fa-solid fa-m">m</i>akers kg </Link>
    {/* //! menu burger start */}
    <nav className={`navbar ${menuToggleButton ? "active" : null}`}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/shop"}>Магазин</Link>
        <Link to={"/about"}>О </Link>
        <Link to={"/rew"}>Отзыве </Link>
        {/* <Link to={"/blog"}>blog</Link> */}
        <Link to={"/contact"}>Контакт</Link>
        
        {  user?.email === "admin@gmail.com" ? (
          <Link to={"/add"}>
          <a className="fas fa-plus"/>
           Добавить продукты</Link>
           ): null
        }
    </nav>
    {/* menu burger start */}
    {/* //! Icons start */}
    <div className="icons">
        <div id="menu-btn" className="fas fa-bars" 
        onClick={() => setMenuToggleButton(!menuToggleButton)}/>

        <div id="search-btn" className="fas fa-search" 
        onClick={() => setSearchToggleButton(!searchToggleButton)}/>


        <div id="cart-btn" className="fas fa-shopping-cart" 
        onClick={() => setCartToggleButton(!cartToggleButton)}></div>

        <div id="cart-btn" className="fas fa-heart" 
        onClick={() => setFovaritesToggleButton(!fovaritesToggleButton)} />

        <div id="login-btn" className="fas fa-user" 
        onClick={() => setLoginToggleButton(!loginToggleButton)} />
    </div>
    {/* ICons end */}
    {/* //! search input start */}
    <form action="" className={`search-form ${searchToggleButton ? "active" : null} `}>
        <input type="search" placeholder="Поиск ..." id="search-box" 
         value={search} onChange={e => setSearch(e.target.value)}
        />
        <label  htmlFor='search-box'  className="fas fa-search"></label>
    </form>
    {/* search input end*/}
    {/* //! Cart start */}
    <div className={`shopping-cart ${cartToggleButton ? "active" : null}`} >
        {
        cart.products ?  cart.products.map((elem: any) => (
        <div className="box">

            <i className="fas fa-times"onClick={() => 
            deleteProductCart(elem.item.id, elem.item.price)}/>
              
            <img src={elem.item.photo} alt={elem.item.title}/>
            <div className="content">
            <h3>{elem.item.title}</h3>

            <input type={'number'} min='1' value={elem.count}onChange={
             (e) => changeCountProduct(+e.target.value, elem.item.id)
            }/>

            <span className="multiply">x</span> 
            <span className="price">$: {elem.item.price}</span>
            </div>
        </div>
        )):  <h1>пусто</h1>
        }
        <h3 className="total"> total : <span>{cart.totalPrice}</span></h3>
        <Link to={""} className="btn">checkout cart</Link>
    </div>
    {/*  cart end */}
    {/* //!Focarites  start*/}
    <div className={`shopping-cart ${fovaritesToggleButton ? "active" : null}`} >
        <h2>fovarites</h2>
        {
        fovarites.products ?  fovarites.products.map((elem: any) => (
        <div className="box">

            <i className="fas fa-times "onClick={() => 
             deleteFovarites(elem.id)  }/>
              
            <img src={elem.photo} alt={elem.title}/>
            <div className="content">
            <h3>{elem.title}</h3>
            </div>

        </div>
        )):  <h1>пусто</h1>
        }
    </div>
      {/* Fovarites End */}

      {/* //! Register start */}
        {isLoginButton ? (
            !user ? (
            <form action='' className={`login-form ${loginToggleButton ? "active" : null}`} >
             <h3>Форма Входа</h3>

             <input  value={authValue.email} 
             onChange={e => setAuthValue({...authValue, email: e.target.value})} 
             type="email" placeholder="введите адрес электронной почты " className="box"/>

             <input value={authValue.password} 
             onChange={e => setAuthValue({...authValue, password: e.target.value})} 
             type="password" placeholder="введите свой пароль" className="box"  />

             <input type="submit" value="аутентификация" className="btn" onClick={handleSignIn} />
             <GoogleButton style={{width: "310px"}} onClick={googleAuth}/>
             <p>Нет Аккаунта? 
             <Link to={''} onClick={() => setIsLoginButton(!isLoginButton)}>регистрация</Link>
             </p>
            </form>
            ):(
                <span className={`login-form ${loginToggleButton ? "active" : null}`} style={{width: '230px'}} >
                    <input type="submit" value="Logout" className="btn" style={{width: '200px'}} onClick={logout} /> 
                </span>
            )
       ):
       (
          !user ? (
          <form action='' className={`login-form ${loginToggleButton ? "active" : null}`} >
            <h3>регистрация</h3>

            <input value={authValue.email} 
            onChange={e => setAuthValue({...authValue, email: e.target.value})} 
            type="email" placeholder="введите адрес электронной почты " className="box"/>

            <input value={authValue.password} 
            onChange={e => setAuthValue({...authValue, password: e.target.value})} 
            type="password" placeholder="введите свой пароль" className="box"  />

            <input type="submit" value="регистрация" className="btn" onClick={handleSignUp} />
            <GoogleButton style={{width: "310px"}} onClick={googleAuth}/>
            <p>Нет Аккаунта? 
            <Link to={''} onClick={() => setIsLoginButton(!isLoginButton)}>авторизация</Link>
            </p>
           </form>
           ): (
            <span className={`login-form ${loginToggleButton ? "active" : null}`} style={{width: '230px'}} >
            <input type="submit" value="Logout" className="btn" style={{width: '200px'}}  onClick={logout}  /> 
           </span>
           )
       )}
</header>
)}
export default MyNavbar;