import react from "react";  
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Testimonials = () => {
  const reviews = [
    {
      name: "Suchitra Chandran",
      location: "Singapore",
      review:
        "Sayar Jewellers, a name that I have heard growing up, my parents always bought our Jewellery from Sayar jewellers, they have the most exquisite designs, and the craftsmanship is amazing. Every time I wear a piece of Jewellery it’s admired by everyone.",
    },
    {
      name: "Geethanjali",
      location: "Birmingham, UK",
      review:
        "All the jewellery pieces were exquisitely designed with incredible carvings. Their entire collection is beautifully created and is one-of-a-kind. I was delighted with my experience at Sayar Jewellers.",
    },
    {
      name: "Yashoda Kiran",
      location: "Chennai",
      review:
        "Their jewellery collections are always in trend, if not ahead of it. They share their expertise on whether it is a good fit for you which helps in making a more informed decision. They also customize jewellery according to your requirements. I would recommend Sayar Jewellers to anyone looking for good, designer jewellery!",
    },
    {
      name: "Bhavana reddy",
      location: "Chennai",
      review:
        "I have been visiting Sayar Jewellers for the past twenty years. You can find wide range of collections and unique designs at very reasonable prices here.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6 bg-white text-black">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">Testimonials</h1>
        <h4 className="text-base md:text-xl text-yellow-500 leading-relaxed">
          #womenofsayar
        </h4>
      </div>

      <div className="w-full max-w-5xl mt-10">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          className="pb-10"
        >
          
          {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
            (_, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
                  {reviews
                    .slice(index * 2, index * 2 + 2)
                    .map((review, i) => (
                      <div
                        key={i}
                        className="border border-gray-300 p-6 rounded-md shadow-sm bg-white"
                      >
                        <h3 className="font-semibold text-lg text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          {review.location}
                        </p>
                        <p className="text-gray-700 text-s leading-relaxed">
                          {review.review}
                        </p>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;