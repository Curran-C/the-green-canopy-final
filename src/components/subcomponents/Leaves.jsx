import React from 'react'

export default function Leaves(props) {
    let count = []
    for (let i = 1; i <= props.num; i++) {
        count.push(i);
    }
    return (
        count.map((count) => {
            return (
                <div key={count} style={{ position: 'relative' }}>
                    <img className={'leaf' + count} style={{ position: 'absolute' }} src={"images/leaves/leaf" + count + ".png"} alt="leaf" />
                </div>
            )
        })
    )
}