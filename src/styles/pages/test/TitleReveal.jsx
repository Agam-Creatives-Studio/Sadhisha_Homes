import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';

import designImage1 from '../../../assets/images/bg/kolam-design.png';
import designImage2 from '../../../assets/images/bg/kolam-design - Copy.png';

gsap.registerPlugin(SplitText);

const TitleReveal = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate left image: from x: 50 to x: -100
    tl.fromTo('.left-img',
      { x: 200, opacity: 1 },
      { x: -100, opacity: 1, duration: 2.6, ease: 'power3.out' },
      0
    );

    // Animate right image: from x: -50 to x: 100
    tl.fromTo('.right-img',
      { x: -200, opacity: 1 },
      { x: 100, opacity: 1, duration: 2.6, ease: 'power3.out' },
      0
    );

    // Animate the title in the center
    const title = document.querySelector('.titleAnimated');
    if (title) {
      const split = new SplitText(title, { type: 'chars' });
      tl.from(split.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.05,
      }, 0.6); // start after the images move
    }
  }, []);

  return (
    <div>
      <style>{`
        .animation-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          position: relative;
        }

        .symbol-img {
          width: 62px;
          opacity: 0;
        }

      
      `}</style>

      <div className="animation-container bgGreen">
        <img src={designImage1} alt="left" className="symbol-img left-img" />
        <h2 className="secTitleWhite titleAnimated">Investor Club</h2>
        <img src={designImage2} alt="right" className="symbol-img right-img" />
      </div>
    </div>
  );
};

export default TitleReveal;
