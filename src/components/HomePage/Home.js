import React from 'react';
import "./Home.css";
import Globe from '../../magicui/components/ui/globe.jsx';
import LetterPullup from '../../magicui/components/ui/letter-pullup.jsx';
import GradualSpacing from '../../magicui/components/ui/gradual-spacing.jsx';
// import Card from '../../atoms/card/Card.js';

export default function Home() {

    return (
        <div className='Homepage'>
            <div className='intro'>
                <LetterPullup className={"headtext"} words={"Hi , We Are Engineers World"} delay={0.05} />
                <GradualSpacing
                    className="tagline"
                    text="BELIEVE IN TECHNOLOGY TO CREATE NEW AND FUTURISTIC SOLUTIONS"
                />
            </div>
            <Globe className={'globeStyle'} />
            {/* <Card cardcontent={"Best Architecture"} /> */}
        </div>
    )

}