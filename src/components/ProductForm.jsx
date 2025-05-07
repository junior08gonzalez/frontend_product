import { useEffect, useState } from "react";

const initialDataForm = {
    id:0,
    name:"",
    price:0,
    description:""
}

export const ProductForm = ({productSelected ,handlerAdd}) =>{
    
    const [form, setForm]  = useState(initialDataForm);
    
    const {id, name, price, description} = form;

    useEffect(()=>{
        setForm(productSelected)
    },[productSelected]);

    return (    
        <form onSubmit={(event) =>{
            event.preventDefault();

            if(!name || !price || !description){
                alert('Debe completar los datos del Formulario');
                return;
            }
            // console.log(form);
            handlerAdd(form);
            setForm(initialDataForm);

        }}>
            <div>
            <input placeholder="Name"
                className="form-control my-3 w-75"
                name="Name"
                value={name}
                onChange={(event)=> setForm({
                   ...form, 
                   name: event.target.value 
                })}
                />
            </div>
            <div>
            <input placeholder="Price"
                name="Price"
                className="form-control my-3 w-75"
                value={price}
                onChange={(event)=> setForm({
                    ...form, 
                    price: event.target.value 
                 })}
                />     
            </div>
            <div>
            <input placeholder="Description"
                name="Description"
                className="form-control my-3 w-75"
                value={description}
                onChange={(event)=> setForm({
                    ...form, 
                    description: event.target.value 
                 })}
                />
            </div>
            <div>
                 <button type="submit" className="btn btn-primary">
                    {id > 0 ? 'Update': 'Create'}
                 </button>
            </div>
                
        </form>
    )
}