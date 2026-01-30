"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function AboutMePage() {
    let facts: string[] = 
    ["There are an estimated 10 million galaxies in the observable universe.",
     "Earth isn’t actually round",
     "The world’s oceans contain enough salt to cover all of Earth’s landmass with a layer approximately 500 feet thick",
     "Only 1% of the water on Earth is fresh water that we can use.",
     "There are no seagulls in Hawaii.",
     "Dragonflies have six legs but cannot walk",
     "Gummy bears were originally called dancing bears.",
     "Sea otters have the thickest fur of any mammal, at 1 million hairs per square inch.",
     "The bird on the Twitter logo is named Larry.",
     "The oldest living land animal on Earth is a 192-year-old tortoise named Jonathan."]
    
    const [fact, setFact] = useState("");
    return (
        <div>
        
            <h1 className={title()}>About Me</h1>
            <br />
            <Button onPress={() => {
                setFact(facts[Math.floor(Math.random() * facts.length)])}}>Press 4 fact</Button>
            <p>{fact}</p>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Myself</h6>
                <img src="a.jpg" alt="Self Img" width="300" height="200"></img>
                <p className="text-center">My self img, take in class. (ᗜ ‸ ᗜ)</p>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Sports</h6>
                <img src="https://static.vecteezy.com/system/resources/previews/009/488/329/original/athlete-stick-man-swim-in-sea-black-silhouette-icon-sport-swimmer-dive-in-pool-glyph-pictogram-human-simple-figure-motion-in-water-flat-symbol-people-swim-on-beach-isolated-illustration-vector.jpg" alt="Cool Img" width="400" height="250"></img>
                <p className="text-center">Swiming is my hobbie, swimming is fun.</p>
                <a className="bg-cyan-500 text-center" href="https://play.google.com/store/apps/details?id=com.active.aps.meetmobile&hl=en-US">An app for swimmer to track their swim meets</a>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Cool Img</h6>
                <img className="justify-center" src="https://homdgcat.wiki/images/lightconemaxfigures/23025.png" alt="Cool Img" width="450" height="200"></img>
                <p className="text-center">Lightcone(weapon) of my favorite character in HSR which I play.</p>
                <Button as={link} className="bg-cyan-600 " href="https://homdgcat.wiki/sr/char?lang=CH#_1310">A database</Button>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Important things to my life</h6>
                <img src="https://tse4.mm.bing.net/th/id/OIP.Ia3dqYo0pQArdg_pQS-WMAHaE7?rs=1&pid=ImgDetMain" alt="$$$" width="500" height="300"></img>
                <p className="text-center">Money is important, money can buy most things wanted in the world and be it can buy food for me to survive.</p>
            </div>
        
        </div>
    );
}