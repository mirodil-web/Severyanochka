import React, { useEffect } from 'react'
// components
import Hero from '../components/Hero'
import Aksiya from '../components/Aksiya'
import Novinki from '../components/Novinki'
import Ranshe from '../components/Ranshe'
import Pridlojeniya from '../components/Pridlojeniya'
import Nashi from '../components/Nashi'
import Ctati from '../components/Ctati'

const Home = ({ addLike, addLike2, addLike3, removeLike, removeLike2, removeLike3, cardLike, qoshish, like, addKorzina, addKorzina2, addKorzina3 }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Aksiya addLike={addLike} addKorzina={addKorzina}  removeLike={removeLike} qoshish={qoshish} like={like} />
            <Novinki addLike2={addLike2} addKorzina2={addKorzina2}  removeLike2={removeLike2} qoshish={qoshish} like={like} />
            <Ranshe addLike3={addLike3} addKorzina3={addKorzina3} removeLike3={removeLike3} />
            <Pridlojeniya />
            <Nashi />
            <Ctati />
        </>
    )
}

export default Home