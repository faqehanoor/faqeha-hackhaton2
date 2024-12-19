import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from '@/app/components/About'
import Footer from './components/Footer'
import EditiorsPick from './components/EditiorsPick'
import Products from './components/Products'
import ClassicProduct from './components/ClassicProduct'
import FluidContainer from '@/app/components/FluidContainer'
import Contact from './components/Contact'
import Post from './components/Post'

export default function page() {
  return (
    <div>
    <Header />
       <Navbar />
       <Home />
       <About />
       <EditiorsPick />
       <Products />
       <ClassicProduct />
       <FluidContainer />
       <Post />
       <Contact />
       <Footer />
    </div>
  )
}
