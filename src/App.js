import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
// import Swiper from './Components/Swiper'
import useResumeData from "./hooks/useResumeData";

export default function App() {
  const { state } = useResumeData();
  console.log('state in app: ', state);

  return (
    <div className="App">
      <Header data={state.resumeData.main}/>
      <About data={state.resumeData.main}/>
      <Resume data={state.resumeData.resume}/>
      <Portfolio projects={state.resumeData.portfolio} data={state.resumeData.portfolio}/>
      <Testimonials data={state.resumeData.testimonials}/>
      {/* <Swiper projects={state.resumeData.portfolio} /> */}
      {/* <Contact data={this.state.resumeData.main}/> */}
      <Footer data={state.resumeData.main}/>
    </div>
  );
}