import React from 'react'
// components
import Hero from '../components/Hero'
import Aksiya from '../components/Aksiya'
import Novinki from '../components/Novinki'
import Ranshe from '../components/Ranshe'
import Pridlojeniya from '../components/Pridlojeniya'
import Nashi from '../components/Nashi'
import Ctati from '../components/Ctati'

const Home = ({ addLike, removeLike, cardLike, qoshish, like, addKorzina }) => {
    return (
        <>
            <Hero />
            <Aksiya addLike={addLike} addKorzina={addKorzina} cardLike={cardLike} removeLike={removeLike} qoshish={qoshish} like={like} />
            <Novinki addLike={addLike} addKorzina={addKorzina} cardLike={cardLike} removeLike={removeLike} qoshish={qoshish} like={like} />
            <Ranshe />
            <Pridlojeniya />
            <Nashi />
            <Ctati />
        </>
    )
}

export default Home