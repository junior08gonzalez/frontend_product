import { useEffect, useState } from "react";
// import { findAll, listProduct } from "../services/ProductService";
import { ProductGrip } from "./ProductGrip";
import { ProductForm } from "./ProductForm";
import { create, findAll, remove, update } from "../services/ProductService";

export const ProductApp = ()=>{
    const [products, setProducts] = useState([]);
    
    const [productSelected, setProductSelected] = useState({
        id:0,
        name:"",
        price:0,
        description:""
    })

    const getProducts = async()=>{
        const result = await findAll(); 
        console.log(result);
        setProducts(result.data._embedded.products);
    }

    useEffect(()=>{
        // const result = listProduct(); 
       getProducts();
    },[]);

    const handlerAddProduct = async (product) =>{
        console.log(product.id);
        
        if(product.id > 0){
            const response = await update(product);
            setProducts(products.map(prod =>{
                if(prod.id == response.data.id){
                    return {...response.data};
                }
                return prod;
            }));
        }else{
            const response = await create(product);
            // setProducts([...products, {...product, id: new Date().getTime()}]);
            setProducts([...products, {...response.data}]);
        }
        
    }

    const handlerRemoveProduct = (id)=>{
        console.log(id);
        remove(id);
        setProducts(products.filter(product=> product.id != id));
    }

    const handlerProductSelected = (product)=>{
        setProductSelected({...product});
    }
    return (
        <div className="container my-4">
            <h2>Productos!</h2>
            <div className="row">
                <div className="col">
                    <ProductForm handlerAdd = {handlerAddProduct} productSelected = {productSelected} />
                </div>
                <div className="col">
                    {
                    products.length > 0 ? <ProductGrip products={products} handlerRemove = {handlerRemoveProduct} handlerProductSelected={handlerProductSelected}/>
                        : <div className="text-center alert alert-warning">No hay productos en el sistema!</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}