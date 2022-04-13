import React from 'react';
import LeftAlign from './subcomponents/LeftAlign'
import RightAlign from './subcomponents/RightAlign'

export default function Services() {

    let count = [0, 1, 2]

    return (
        <div>
            {count.map((number) => {
                return (
                    <>
                        <LeftAlign />
                        <RightAlign />
                    </>
                )
            })}
        </div >
    )
}