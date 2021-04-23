import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function Portfolio({projects}) {
  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const slides = []
  if(projects){
    // eslint-disable-next-line
    projects.projects.map((project) => {
      const projectImage = 'images/portfolio/'+project.image;

      slides.push( 
      <SwiperSlide key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
          <a target="_blank" href={project.url} title={project.title}>
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                    <p>{project.category}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </SwiperSlide>
      )
    })
  }

  return (
    <section id="portfolio">

    <div className="">

        <div className="">

          <h1>Check Out Some of My Works.</h1>

          <div id="" className="">
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
                1600: {
                  width: 1600,
                  slidesPerView: 4,
                },
              }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              wrapperTag="ul"
              navigation
              pagination
              loop
              spaceBetween={10}
              slidesPerView={1}
              onInit={(swiper) => console.log('Swiper initialized!', swiper)}
              onSlideChange={(swiper) => {
                console.log('Slide index changed to: ', swiper.activeIndex);
              }}
              onReachEnd={() => console.log('Swiper end reached')}

            >
              {slides}
            </Swiper>
          </div>
        </div>
    </div>
  </section>
  );
}