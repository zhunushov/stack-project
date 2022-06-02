import React, { useEffect, useMemo, useState } from 'react';
import { useProductActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectore';
import ProductCard from './ProductCard';

const ProductList = () => {
    const {error, products,loading} = useTypedSelector(state => state.product)
    const [search, setSearch] = useState('')
    const { getProduct } = useProductActions()
    const { cart } = useTypedSelector(state => state.cart)
    const { fovarites } = useTypedSelector(state => state.fovarites)

    useEffect(() => {
        getProduct(search)
        return () => {
            getProduct(search)
        }
    }, [])

    useMemo(() => {
        console.log(search)
        getProduct(search)
    }, [search])

    if(error){
        return <h1>{error}card</h1>
    }
    if(loading) {
        return <h1>loading...</h1>
    }

return (
<>
<section className="category">
<h1 className="title"> our <span>category</span> <span>view all</span> </h1>

<div className="box-container">
    <span className="box">
        <img src={require("../css/image/cat-1.png")} alt="" />
        <h3 onClick={() => setSearch("fruits")}>fresh fruits</h3>
    </span>

    <span className="box">
        <img src={require("../css/image/cat-2.png")} alt="" />
        <h3 onClick={() => setSearch("vegetables")}>vegetables</h3>
    </span>

    <span className="box">
        <img src={require("../css/image/cat-3.png")} alt="" />
        <h3 onClick={() => setSearch("organic")}>organic spices</h3>
    </span>

    <span className="box">
        <img src={require("../css/image/cat-4.png")} alt="" />
        <h3 onClick={() => setSearch("meat")}>fresh meat</h3>
    </span>

    <span className="box">
        <img src={require("../css/image/cat-5.png")} alt="" />
        <h3 onClick={() => setSearch("wheat")}>organic wheat</h3>
    </span>

</div>
</section>
<section className="products">
<h1 className="title"> Наш <span>Продукты</span>
 <span onClick={() => setSearch('')}
>Посмотреть Все</span> </h1>
<div className="box-container">
    {
       products.map((item) => (
        <>
        {/* {console.log(item)} */}
         <ProductCard item={item} key={item.id}/>
        </>
    ))
    }
</div>
</section>
</>
    );
};

export default ProductList;