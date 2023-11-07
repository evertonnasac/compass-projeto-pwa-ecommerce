import {StyleContainerProducts} from "./styles"
import {ProductCartd, PropsProductCard} from "./ProductCard"


interface IProduct {
    products: PropsProductCard[]
}

export const ProductsContainer = (props : IProduct) => {
    return(
        <StyleContainerProducts>
            {props.products.map((product) => {
                return(
                    <ProductCartd
                        key = {product._id}
                        _id={product._id}
                        category={product.category}
                        description={product.description}
                        price = {product.price}
                        urlImage = {product.urlImage}
                        rate = {product.rate}
                        rebate = {product.rebate}
                        brand = {product.brand}
                        totalRatings = {product.totalRatings}
                    />
                )
            })}
        </StyleContainerProducts>
    )
}