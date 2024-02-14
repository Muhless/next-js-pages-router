import { useRouter } from "next/router"

const ShopPage = () => {
    const { query } = useRouter();
    return (
        <div>
            <h1>Shop Page</h1>
            {/* cara 1 mengambil slug dari url */}
            <p>Shop : {query.slug ? query.slug[0] : ""} - {query.slug ? query.slug[1] : ""}</p> 
            {/* cara 2 */}
            <p>Shop : {`${query.slug && query.slug[0] + " - " + query.slug[1]}`}</p>
        </div>
    )
}

export default ShopPage
