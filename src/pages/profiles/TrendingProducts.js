import React from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'
import Asset from '../../components/Asset';
import TrendingProduct from './TrendingProduct';
import { useProductData } from '../../contexts/ProductDataContext';

const TrendingProducts = ({ mobile }) => {
    const {popularProducts} = useProductData();

  return (
    <Container 
        className={`${appStyles.Content} ${
                mobile && 'd-lg-none text-center mb-3'
            }`}
        >
        {popularProducts.results.length ? (
            <>
                <p>Trending Products</p>
                {mobile ? (
                    <div className='d-flex justify-content-around'>
                    {popularProducts.results.slice(0,3).map(product => (
                        <TrendingProduct key={product.id} product={product} mobile />
                    ))}
                    </div>
                ) : (
                    popularProducts.results.slice(0,10).map(product => (
                        <TrendingProduct key={product.id} product={product} />
                    ))
                )}
                
            </>
        ) : (
            <Asset spinner />
        )}
    </Container>
  );
};

export default TrendingProducts