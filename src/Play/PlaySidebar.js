import React from 'react'

export default function PlaySidebar () {
    return (
        <div className = "objective sidebar" >
            <h1>Objective:</h1>
            <p> Move all of the disks from the left stack to the far right stack.</p>
            <ul>Rules:
                <li>You can only move one disk at a time.</li>
                <li>Disk can be moved to any stack.</li>
                <li>You can not put a larger disk on a smaller disk.</li>
            </ul>
          </div>
    )
}