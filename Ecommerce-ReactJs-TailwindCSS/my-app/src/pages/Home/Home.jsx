import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory.jsx'

const Home = () => {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <Hero />
                <ExploreCategory/>
            </div>
        </>
    )
}

export default Home