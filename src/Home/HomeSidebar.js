import React from 'react'

export default function HomeSidebar () {
    return (
        <div className = "objective sidebar" >
            <h1>Objective:</h1>
            <p> Move all of the disks from the left stack to the far right in the fewest possible moves.</p>
            <img
                src = "TOH.gif"
                alt = "Tower Of Hanoi"
            />
            <ul><b>Rules:</b>
                <li>Only one disk may be moved at a time.</li>
                <li>Larger disks may not be placed on smaller disks.</li>
            </ul>
            
        </div>
    )
}