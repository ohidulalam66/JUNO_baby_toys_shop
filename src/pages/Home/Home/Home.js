import React from 'react';
import Banner from '../Banner/Banner';
import DiscoverNow from '../DiscoverNow/DiscoverNow';
import PopularProducts from '../PopularProducts/PopularProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <>
            <Banner />
            <PopularProducts />
            <DiscoverNow />
            <Review />
        </>
    );
};

export default Home;