/* Requirement Statement: Create a product component that displays information about the products that the company sells.
   Display at least 3 product components when the “shop” menu item is selected.

Note: I have broken display product feature into two compoments - Products and Product for better read
*/

import Product from "./Product"

// Products component receives the list of items and uses map() to call individual Product
const Products = ({ products }) => {
    return (
        <div className='products'>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
};

export default Products

