
import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip'
const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [showDescriptions, setShowDescriptions] = useState(null);
    console.log(products, 'sdfsdfsdfsdf');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);
    return (
        <div>
         <Tooltip  style={{ maxWidth:'350px', zIndex:'99999', backgroundColor: "#fff", color: "#000" }} id="my-tooltip" />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl pt-6 px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-[35px] underline text-left font-bold text-gray-900">Product List</h2>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.slice(0, 20).map((product, index) => (
                            <>
                                <div key={index} class="group border-gray-100/30 flex w-full mx-auto max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
                                    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                        <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                                        <img class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />

                                        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                                    </a>
                                    <div class="mt-4 px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl truncate text-left font-semibold tracking-tight text-white">{product.title}</h5>
                                        </a>
                                        <div className='h-14'>

                                        {showDescriptions === index &&
                                            <p data-tooltip-id="my-tooltip" data-tooltip-content={product.body} className="relative truncate-to-2-lines  text-lg text-left text-white">{product.body}</p>}
                                        </div>
                                        <div class="mt-2 mb-5 flex items-center justify-between">
                                            <p>
                                                <span class="text-3xl font-bold text-white">$449</span>
                                                <span class="text-sm text-white line-through">$699</span>
                                            </p>
                                        </div>
                                        <button onClick={() => console.log(`Added ${product.title} to cart`)} class="hover:border-white/40 w-full flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to cart</button>
                                        {
                                            showDescriptions === index ?
                                                <button onClick={() => setShowDescriptions(null)} class="hover:border-white/40 mt-2 w-full flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                    Hide Description
                                                </button>
                                                :
                                                <button onClick={() => setShowDescriptions(index)} class="hover:border-white/40 mt-2 w-full flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                    Show Description
                                                </button>
                                        }
                                    </div>
                                </div>

                            </>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDisplay;
