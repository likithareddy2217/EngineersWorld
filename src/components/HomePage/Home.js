import React from 'react';
import "./Home.css";
import Globe from '../../magicui/components/ui/globe.jsx';
import LetterPullup from '../../magicui/components/ui/letter-pullup.jsx';
import GradualSpacing from '../../magicui/components/ui/gradual-spacing.jsx';
import Particles from '../../magicui/components/ui/particles';
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
            <div className="socialLinks">
            <img src="/images/linkedinimage.svg" alt="Italian Trulli"></img>
            <img src="/images/instagramimage.svg" alt="Italian Trulli"></img>
            <img src="/images/githubimage.svg" alt="Italian Trulli"></img>
            </div>
            <Globe className={'globeStyle'} />
            {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                
                
            </div> */}
            
            {/* <Card cardcontent={"Best Architecture"} /> */}
        </div>
    )

}