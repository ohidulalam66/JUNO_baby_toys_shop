import React from 'react';
import Banner from '../Banner/Banner';
import DiscoverNow from '../DiscoverNow/DiscoverNow';
import PopularProducts from '../PopularProducts/PopularProducts';
import ReviewPost from '../ReviewPost/ReviewPost';

const Home = () => {
    return (
        <>
            <Banner />
            <PopularProducts />
            <DiscoverNow />
            <ReviewPost />
        </>
    );
};

export default Home;