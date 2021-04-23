// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
// import 'swiper/swiper-bundle.css';

// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

// export default function ReactSwiper({projects}) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [controlledSwiper, setControlledSwiper] = useState(null);

//   const slides = [];
  
//   if (projects !== undefined) {    
//     projects.projects.map((project, index) => {
//       const backgroundImageStyle = {
//         backgroundImage: `url("images/portfolio/${project.image}")`,
//         height: '100%',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//       }

//       console.log(project);
//       slides.push(
//           <SwiperSlide key={index} tag="li">
//             <div
//               style={backgroundImageStyle}
//               // style={{ listStyle: 'none' }}
//               alt={`Slide ${index}`}
//             >
//               <div className="item-wrap project-details">
//                 <a target="_blank" href={project.url}>
//                   <h3>{project.title}</h3>
//                 </a>
//                 <p>{project.category}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//       );
//     })
//   }

//   return (
//     <React.Fragment>
//       <Swiper
//         breakpoints={{
//           // when window width is >= 640px
//           640: {
//             width: 640,
//             slidesPerView: 1,
//           },
//           // when window width is >= 768px
//           768: {
//             width: 768,
//             slidesPerView: 2,
//           },
//           1200: {
//             width: 1200,
//             slidesPerView: 3,
//           },
//           1600: {
//             width: 1600,
//             slidesPerView: 4,
//           },
//         }}
//         id="main"
//         thumbs={{ swiper: thumbsSwiper }}
//         controller={{ control: controlledSwiper }}
//         tag="section"
//         wrapperTag="ul"
//         navigation
//         pagination
//         loop
//         spaceBetween={10}
//         slidesPerView={1}
//         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
//         onSlideChange={(swiper) => {
//           console.log('Slide index changed to: ', swiper.activeIndex);
//         }}
//         onReachEnd={() => console.log('Swiper end reached')}

//       >
//         {slides}
//       </Swiper>
// {/* 
//       <Swiper
//         id="thumbs"
//         spaceBetween={5}
//         slidesPerView={3}
//         onSwiper={setThumbsSwiper}
//       >
//         {thumbs}
//       </Swiper> */}

//       {/* <Swiper id="controller" onSwiper={setControlledSwiper}>
//         {slides2}
//       </Swiper> */}
//     </React.Fragment>
//   );
// }