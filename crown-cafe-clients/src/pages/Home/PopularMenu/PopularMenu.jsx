import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const popularItem = data.filter(item => item.categories === 'popular')
                setMenu(data)
            })
    }, [])

    return (
        <div>
            <section className='container mx-auto px-16 py-20'>
                <SectionTitle
                    subHeading="Check it out"
                    Heading="FROM OUR MENU"
                ></SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {
                        menu?.slice(0, 8)?.map(item => <MenuItem
                            item={item}
                            key={item._id}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;