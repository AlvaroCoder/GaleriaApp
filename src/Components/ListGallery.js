import React from 'react'
import {  GalleryCard } from './GalleryCard';
function ListGallery({ imageList }) {
    return (
        <div className='relative w-full  h-auto grid grid-cols-3 gap-4 p-5 '>
            {imageList.map((val) => {
                return <GalleryCard key={val.idimage} data={val} />
            })
            }
        </div>
    )
}

export default ListGallery;