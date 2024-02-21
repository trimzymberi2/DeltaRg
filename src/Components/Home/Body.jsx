import React, { useEffect } from 'react';
import Home from './Home';
import ScndCnt from './ScndCnt';
import Services from './Services';
import Contact from './Contact';
import './Body.scss';
import Aboutus from './Aboutus';
import Whoarewe from './Whoarewe';

export default function Body() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop -400;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='bdy-class'>
      <section className='sec-1 show-animate' id='home'>
        <Home />
      </section>
      <section className='sec-2' id='partners'>
        <ScndCnt />
      </section>
      <section className='sec-3' id='services'>
        <Services />
      </section>
      <section className='sec-4' id='about'>
        <Aboutus/>
      </section>
      <section className='sec-6' id='about'>
        <Whoarewe/>
      </section>
      <section className='sec-5' id='contact'>
        <Contact />
      </section>
    </div>
  );
}
