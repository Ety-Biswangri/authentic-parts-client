import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import PartsItem from '../PartsItem/PartsItem';
import Reviews from '../Reviews/Reviews';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PartsItem></PartsItem>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;