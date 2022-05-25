import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Footer/Footer';
import PartsItem from '../PartsItem/PartsItem';
import RequestQute from '../RequestQuote/RequestQute';
import Reviews from '../Reviews/Reviews';
import Team from '../Team/Team';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PartsItem></PartsItem>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Team></Team>
            <RequestQute></RequestQute>
        </div>
    );
};

export default HomePage;