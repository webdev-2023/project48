/* Requirement Statement: Create a product component that displays information about the products that the company sells.

Note: I have broken display product feature into two compoments - Products and Product for better read
*/

// Product component displays the individual item
const Product = ({ product }) => {
    return (
        <div className='product'>
            <img className="img-size" src={product.img} alt="prodImg" />
            <h6>{product.text}</h6>
            <p>{product.price}</p>
        </div>)
};

export default Product