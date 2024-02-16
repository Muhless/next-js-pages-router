import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router"; // hooks : untuk mengambil data dari url
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DetailProductPage = ({ product }: { product: ProductType }) => {
    const { query } = useRouter();

    // TODO: client side rendering dynamic route
    // const { data, error, isLoading } =
    //     useSWR(`/api/product/${query.product}`, fetcher);

    return (
        <div>
            {/* TODO: client side rendering dynamic route */}
            {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

            {/* TODO: server side & static side rendering dynamic route */}
            <DetailProduct product={product} />
        </div>
    )
}

export default DetailProductPage

// TODO: server side
// export async function getServerSideProps({ params }: { params: { product: string } }) {
//     // fetch data
//     const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
//     const response = await res.json();

//     return {
//         props: {
//             product: response.data
//         },
//     };
// }

// TODO: static side

// paths untuk static side
export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: {
            product: product.id
        }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params, }: { params: { product: string }; }) {
    // fetch data
    const res = await fetch(`http://localhost:3000/api/product/${params.product}`)
    const response = await res.json()

    return {
        props: {
            product: response.data
        },
    };
}