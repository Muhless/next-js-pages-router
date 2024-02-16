import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProduct = ({ product }: { product: ProductType }) => {
    return (
        <>
            <h1 className={styles.title}>Detail Product</h1>
            <div className={styles.detailProduct__image}>
                <img src={product.image && product.image} alt={product.name} />
            </div>
            <h4 className={styles.detailProduct__name}>
                {product.name}
            </h4>
            <p className={styles.detailProduct__category}>
                {product.category}
            </p>
            <p className={styles.detailProduct__price}>
                {product.price && product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                })}
            </p>
        </>
    )
}

export default DetailProduct