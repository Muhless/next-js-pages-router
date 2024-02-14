import { useRouter } from "next/router"; // hooks : untuk mengambil data dari url

const DetailProductPage = () => {
    const {query} = useRouter();

    return (
        <div>
            <h1>Detail Product</h1>
            <p>Product : {query.product}</p>
        </div>
    )
}

export default DetailProductPage