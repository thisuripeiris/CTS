

// filter from buttons
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

export default function ProductCards({ vehicleType }) {
    const [products, setProducts] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5001/Product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        axios.get('http://localhost:5001/ProductType')
            .then(response => {
                setProductTypes(response.data);
            })
            .catch(error => {
                console.error('Error fetching product types:', error);
            });
    }, []);

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter((item) =>
        (selectedCategory === '' || item.categoryName.toLowerCase() === selectedCategory.toLowerCase()) &&
        item.vehicle === vehicleType
    );

    return (
        <div>
            <div className='container'>
                {/* Filter buttons */}
                <div className="btn-group me-2" role="group" aria-label="Product Categories">
                    {productTypes.map((type) => (
                        <button
                            key={type._id}
                            type="button"
                            className={`btn btn-secondary ${selectedCategory === type.categoryName.toLowerCase() ? 'active' : ''}`}
                            onClick={() => handleFilter(type.categoryName)}
                        >
                            {type.categoryName}
                        </button>
                    ))}
                </div>
                {/* Product categories and cards */}
                {productTypes.length > 0 ? (
                    productTypes.map((type) => (
                        <div key={type._id} className='fs-3 m-3'>
                            {type.categoryName}
                            <hr />
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                                {filteredProducts
                                    .filter((item) => item.categoryName === type.categoryName && item.vehicle === vehicleType)
                                    .map((filteredItem) => (
                                        <div key={filteredItem._id} className='col mb-4'>
                                            <Card
                                                vehicleItem={filteredItem}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </div>
    );
}
