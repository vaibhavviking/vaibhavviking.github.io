import React from 'react'
import Skillutil from '../components/Skillutil'

export default function Skills() {
    return (
        <div>
            <h1>My Skills</h1>
            <div className="skills" >
                <Skillutil topic='JavaScript' skill='60' />
                <Skillutil topic='HTML' skill='80' />
                <Skillutil topic='CSS' skill='70' />
                <Skillutil topic='SQL' skill='70' />
                <Skillutil topic='React' skill='50' />
                <Skillutil topic='React Native' skill='30' />
                <Skillutil topic='MongoDB' skill='70' />
                <Skillutil topic='Firebase' skill='60' />
                <Skillutil topic='Python' skill='50' />
                <Skillutil topic='C++' skill='50' />
                <Skillutil topic='Bootstrap' skill='80' />
                <Skillutil topic='jQuery' skill='60' />
                <Skillutil topic='Data Structures' skill='50' />
            </div>
        </div>
    )
}
