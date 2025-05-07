import PropTypes from "prop-types"
import { ProductDetail } from "./ProductDetail"

export const ProductGrip = ({handlerProductSelected ,handlerRemove,products})=>{
    return(
        
        <table className="table table-hover table-striped table-light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>{
                        return (
                           <ProductDetail handlerProductSelected={handlerProductSelected} handlerRemove = {handlerRemove} product={product}  key={product.name}/>
                        )
                    })}
                </tbody>
            </table>
     
    )
}

ProductGrip.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.object.isRequired,
    handlerProductSelected: PropTypes.object.isRequired
}