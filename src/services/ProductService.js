import axios from "axios";

const initProducts = [
    {
        id:1,
        name : "Monitor Samsung 45",
        price: 400,
        description: 'El monitor es bueno'
    },
    {
        id:2,
        name : "Iphone 13",
        price: 900,
        description: 'es bueno'
    }
]

const url_base = "http://localhost:8080/products";

export const listProduct = ()=>{
    return initProducts;
}

export const findAll = async ()=>{
    try{
        
        const response = await axios.get(url_base);
        return response;
    }catch(error){
        console.log(error);
    }
    return null;
}

export const create = async ({name, description, price}) =>{
    try{

        const response = await axios.post(url_base, {
            name,
            description,
            price
        });
        return response;
    }catch(error){
        console.log(error);
    }
    return undefined;
}

export const update = async ({id, name, description, price}) =>{
    try{

        const response = await axios.put(url_base + "/" + id, {
            name,
            description,
            price
        });
        return response;
    }catch(error){
        console.log(error);
    }
    return undefined;
}

export const remove = async (id)=>{
    try {
       await axios.delete(url_base + "/" + id);
    } catch (error) {
        console.log(error);
    }
}