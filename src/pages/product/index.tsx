import ProductViews from '@/views/Product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Product = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [products, setProducts] = useState([]);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login')
        }
    }, []);

    //TODO : fetching data dengan useEffect
    // useEffect(() => {
    //     fetch('/api/product')
    //         .then((res) => res.json())
    //         .then((response) => {
    //             setProducts(response.data)
    //         });
    // }, []);

    //TODO : fetching data dengan swr
    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
    );

    return (
        <div>
            <ProductViews products={isLoading ? [] : data.data} />
        </div>
    )
}

export default Product