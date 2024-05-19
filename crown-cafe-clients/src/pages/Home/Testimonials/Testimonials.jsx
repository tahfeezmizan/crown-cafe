import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import reviewsImage from "../../../assets/reviews-image.svg"

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    console.log(reviews);
    return (
        <section className="container mx-auto py-28">
            <SectionTitle
                subHeading="What Our Clients Say"
                Heading="TESTIMONIALS"
            ></SectionTitle>

            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews?.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="w-8/12 mx-auto flex flex-col items-center justify-center font-Ineter text-center">
                                <div className="mb-14">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review?.rating}
                                        readOnly
                                    />
                                </div>
                                <img src={reviewsImage} className="mb-10" alt="" />
                                <p className="pb-2 text-xl">{review?.details}</p>
                                <h3 className="text-2xl text-yellow-600 font-semibold">{review?.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;