import React from 'react';
import LeftAlign from './subcomponents/LeftAlign'
import RightAlign from './subcomponents/RightAlign'
import data from './service-data'
import Footer from './Footer'
import Leaves from './subcomponents/Leaves'



export default function Services() {

    let serviceData = { data }.data

    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }

    return (
        <>
            <Leaves num={7} />
            <div style={{ marginTop: '60px' }} className='overall-margin'>
                {serviceData.map((data) => {
                    if (data.key % 2 === 0) {
                        return (<RightAlign title={data.title} description={data.description} image={data.image} />)
                    } else {
                        return (<LeftAlign title={data.title} description={data.description} image={data.image} />)
                    }
                })}
            </div >
            <Footer />

        </>
    )
}