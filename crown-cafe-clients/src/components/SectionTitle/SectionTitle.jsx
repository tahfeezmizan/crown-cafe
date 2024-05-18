import React from 'react';

const SectionTitle = ({ subHeading, Heading }) => {
    return (
        <div className="w-[600px] mx-auto text-center mb-16">
            <p className="w-96 mx-auto text-xl text-yellow-600 font-Ineter divider pb-5 divider-warning">{subHeading}</p>
            <h2 className="text-3xl md:text-5xl font-bold pl-2 border-y-2 py-4">{Heading}</h2>
        </div>
    );
};

export default SectionTitle;