import React from 'react'
import Image from 'next/image'
import Close from '../public/Close.png'
import Generate from './Generate'



const GeneratePop = (image, name) => {
    return (
        <div id='popup'>
            <Image src={Close} alt='close' />
            <Image src={image} alt={name} />
            <Generate />

        </div>
    )
}

export default GeneratePop
