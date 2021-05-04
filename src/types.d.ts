/*
{
id:1,
title:'...',
price:'...',
category:'...',
description:'...',
image:'...'
},
*/ 

type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

// Define a state type
type InitialStateType = {
    products: Product[];
    cart: Product[];
    product: Product | undefined;
    // category: Product[];
    getProducts: () => void;
    getSingleProduct: (productId:number) => void;
    getDecimalFormat: (num:number) => string;
};