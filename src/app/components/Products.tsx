import React from 'react';
import Image from 'next/image';
import Card1 from "@/Images/fixed-height (1).png"
import Card2 from "@/Images/fixed-height (7).png"
import Card3 from "@/Images/product-cover-5 (9).png"
import Card4 from "@/Images/fixed-height.png"
import Card5 from "@/Images/fixed-height (6).png"
import Card6 from "@/Images/fixed-height (4).png"
import Card7 from "@/Images/fixed-height (5).png"
import Card8 from  "@/Images/fixed-height (3).png"

export default function Product() {
  return (
    <div className="product-section">
      <div className="section-title">
        <h1>Featured Products</h1>
      </div>
      <div className='name89'>
        <h1>BestSeller Products</h1>
      </div>
      <div className="section-subtitle">
        <span>Problem trying to resolve the conflicts between</span>
      </div>
      <div className="grid-container">
       
        <div className="product-card">
          <Image src={Card1} alt="Product 1" />
          <div className="card-details">
            <h3>Graphic Design</h3>
            English Departement
            <p>$29.99</p>
          </div>
        </div>
        
        <div className="product-card">
          <Image src={Card2} alt="Product 2" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$39.99</p>
          </div>
        </div>
       
        <div className="product-card">
          <Image src={Card3} alt="Product 3" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$49.99</p>
          </div>
        </div>
      
        <div className="product-card">
          <Image src={Card4} alt="Product 4" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$59.99</p>
          </div>
        </div>
       
        <div className="product-card">
          <Image src={Card5} alt="Product 5" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$69.99</p>
          </div>
        </div>
      
        <div className="product-card">
          <Image src={Card6} alt="Product 6" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$79.99</p>
          </div>
        </div>
      
        <div className="product-card">
          <Image src={Card7} alt="Product 7" />
          <div className="card-details">
          <h3>Graphic Design</h3>
          English Departement
            <p>$89.99</p>
          </div>
        </div>
      
        <div className="product-card">
          <Image src={Card8} alt="Product 8" />
          <div className="card-details">
          <h3>Graphic Design</h3>
           English Departement
            <p>$99.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
