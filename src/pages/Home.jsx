import React from 'react'
// components
import Hero from '../components/Hero'
import Aksiya from '../components/Aksiya'
import Novinki from '../components/Novinki'
import Ranshe from '../components/Ranshe'
import Pridlojeniya from '../components/Pridlojeniya'
import Nashi from '../components/Nashi'
import Ctati from '../components/Ctati'

const Home = ({ qoshish, like }) => {
    return (
        <>
            <Hero />
            <Aksiya qoshish={qoshish} like={like} />
            <Novinki />
            <Ranshe />
            <Pridlojeniya />
            <Nashi />
            <Ctati />
        </>
    )
}

export default Home