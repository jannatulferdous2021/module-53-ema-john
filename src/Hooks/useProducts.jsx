import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([])
    useEffect( () =>{
        fetch('../../public/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    //return necessary things
    return [products];
}

export default useProducts;