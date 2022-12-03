import React from 'react'
import Image from 'next/image'
import styles from '../styles/GalleryImage.module.css'

const GalleryImage = ({ url }) => {
  return (
    <div className={styles.galleryImage}>
      <Image src={url} width={300} height={300} layout="responsive" />
    </div>
  )
}

export default GalleryImage