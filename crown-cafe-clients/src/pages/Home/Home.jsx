import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import ContactSection from './ContactSection/ContactSection';
import ChelRecommends from './ChelRecommends/ChelRecommends';
import Feactured from './Feactured/Feactured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ContactSection></ContactSection>
            <ChelRecommends></ChelRecommends>
            <Feactured></Feactured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;