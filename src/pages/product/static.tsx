import ProductViews from "@/views/Product"

type ProductType = {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

const ProductPage = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <ProductViews products={products} />
        </div>
    );
};

export default ProductPage;

// untuk memanggil request
export async function getStaticProps() {
    // fetch data
    const res = await fetch("http://localhost:3000/api/product")
    const response = await res.json()

    return {
        props: {
            products: response.data
        },
    };
}