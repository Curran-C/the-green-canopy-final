import React from "react";
import Banner from './subcomponents/Banner'
import { Typography } from '@mui/material'

export default function About() {
    return (
        <div>
            <Banner classname="about-bg-img" title="About" desc="The Green Canopy" />
            <Typography variant="h6">“Choose a job you love, and you never have to work a day in your life”</Typography>
            <Typography vatiant="h6">Quite powerful, this line, made 4 enthusiasts take up Gardening and Landscaping full time and here we are now as The Green Canopy. We aim to take up this self given responsibility in planning and executing a shade of green both of us would come to cherish and be proud of. May it be residential or commercial, we look forward to work with you and infect our love for it that has become an inseparable part of us. We at Green canopy specialise in all kinds of Plants- may it be flowering, fruiting or plain vegetation; the Medium- Soil, Coco peat etc and the fertilisers- organic and inorganic. It gives us immense joy combining our expertise and experience into hand crafting and providing the best greens you’d come to appreciate.</Typography>
        </div>
    )
}