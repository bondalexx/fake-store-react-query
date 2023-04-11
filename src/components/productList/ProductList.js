import React, {useState, useEffect,useMemo} from "react";
import { useQuery } from "react-query";

import {getProducts} from "../../hooks/http.hook";
import Product from '../product/Product'

import './productList.css'

const ProductList = ({ activeFilter }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const productsQuery = useQuery({
        queryKey:["products"],
        queryFn:getProducts
    });
    const filtered = useMemo(() => {
        return productsQuery.data ? productsQuery.data.filter(product => activeFilter === 'all' ? productsQuery.data : product.category === activeFilter) : [];
      }, [activeFilter, productsQuery.data]);

    useEffect(() => {
        setFilteredProducts(filtered);
      }, [activeFilter, productsQuery.data]);
    

    const elements = filteredProducts.map(product => {
        return (
            <Product key={product.id} img={product.image} id={product.id} name={product.title} title={product.title} price={product.price} 
            description={product.description} category={product.category}/>
          )
    })

    return(
        <div className="product-list">
        {elements}
      </div>
    )
}

export default ProductList;