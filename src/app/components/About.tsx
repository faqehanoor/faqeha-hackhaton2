import React from 'react';
import Image from 'next/image';
import AboutPic from '@/Images/none (2).png';
import Happy from '@/Images/desktop-stats-9.png';
import Video from '@/Images/Video card.png';
import Media from '@/Images/media.png';
import Media2 from '@/Images/media (1).png'
import Media3 from '@/Images/media (2).png';
import Row from '@/Images/row.png';
import Unsplash from '@/Images/desktop-testimonials-4.png';

export default function About() {
  return (
    <div>
    
      <div className="about-container">
        
        <div className="about-text">
          <h2>ABOUT COMPANY</h2>
          <h1>ABOUT US</h1>
          <p>
            We know how large objects act,<br />but things on a small scale
          </p>
          <div className="btn4">
            <button>Get Quote Now</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <Image src={AboutPic} alt="About us" />
        </div>
      </div>
      <div className="last">
  <div>
    <span>Problems trying</span>
    <p className="bold-text">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
    </p>
  </div>
  <div>
    <p className="gray-text">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
    </p>
  </div>
</div>
<div>
<Image src={Happy} alt='' />
</div>

<div className='video'>
  <Image src={Video} alt='' />
</div>


<div className='team'>
  <h1>Meet Our Team</h1>
</div>

<div className='team2'>
  <h4> Problems trying to resolve the conflicts between the <br />
  two major realms of Classical Physics: Newtonian mechanics</h4>
</div>


<div className="card-container">
       
       <div className="card">
         <div className="card-inner">
           <div className="card-front">
             <Image src={Media} alt="Card1" />
             <div className="card-content">
               <h3>Card Title 1</h3>
               <p>This is the front of card 1.</p>
             </div>
           </div>
           <div className="card-back">
             <h3>Sophia Parker (Manager)
             </h3>
           </div>
         </div>
       </div>

     
       <div className="card">
         <div className="card-inner">
           <div className="card-front">
          <Image src={Media2} alt=""/>
             <div className="card-content">
               <h3>Card Title 2</h3>
               <p>This is the front of card 2.</p>
             </div>
           </div>
           <div className="card-back">
             <h3>Olivia Johnson (Lead Developer)
             </h3>
           </div>
         </div>
       </div>

  
       <div className="card">
         <div className="card-inner">
           <div className="card-front">
             <Image src={Media3} alt=''/>
             <div className="card-content">
               <h3>Card Title 3</h3>
               <p>This is the front of card 3.</p>
             </div>
           </div>
           <div className="card-back">
             <h3>Ethan Williams  (CEO)
             </h3>
           </div>
         </div>
       </div>
       

    </div>

<div className='big'>
  <h3>Big Campanies Are Here </h3>
  <p>Problems trying to resolve the conflicts between the <br />
  two major realms of Classical Physics: Newtonian mechanics</p>
</div>

<div>
  <Image src={Row} alt=''/>
</div>

<div className='pictures'>
  <Image src={Unsplash} alt='' />
</div>

    </div>
  );
}
