import React,{useState} from 'react'
import {  DeletePhoto } from '../Services/Connection';
import PopUpImage from './PopUpImage';

function DetailsGalleryCard({idPhoto}) {
    const deleteImage =async(evt)=>{
        evt.preventDefault();
        const respond = await DeletePhoto(idPhoto);
        console.log(respond.message);
    }
    return  <div className='absolute w-48 h-20 rigth-0 bottom-12 mt-2 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none focus:ring-2 z-20 bg-white ' aria-expanded='false'>
            <button className='block w-full px-4 py-2 text-sm hover:bg-slate-200'>Editar</button>
            <button className='block w-full px-4 py-2 text-sm text-red-400 hover:bg-slate-200' onClick={deleteImage}>Eliminar</button>
        </div>

}

export function GalleryCard({data}) {
    const {idimage,likes,url,title} = data
    const [toggleVisibleImage, setToggleVisibleImage] = useState(false);

    const popUpImage = (evt)=>{
        evt.preventDefault();
        setToggleVisibleImage(!toggleVisibleImage);
    }
    
    return (
        <div className='relative mt-0  py-5  flex flex-col'>
            <img src={url} className='h-full w-full rounded-lg bg-cover cursor-zoom-in' alt={`${title}-alt`} onClick={popUpImage} ></img>
            {toggleVisibleImage && <PopUpImage changeTrigger={popUpImage} imgUrl={url} img={url} idImage={idimage}/>}
            <div className='mt-2'>
                <h1>{title}</h1>
            </div>
            <div className='relative flex justify-end  w-full h-5'>
                <div className='mr-2 flex flex-row'>
                    <span className='mr-1'>{likes}</span><span class="material-symbols-outlined">favorite</span><span className='ml-5 mr-1'>0</span><span class="material-symbols-outlined">mode_comment</span>
                
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export function EmptyGallery() {
    return ( 
        <div className='w-full h-[20rem]  flex items-center justify-center'>
            <div className='w-1/2 pt-10 h-full bg-red-100 font-InriaSerif border-4 border-spacing-2 rounded-lg  border-slate-600 border-dotted text-center text-lg'>
                <h1>No hay imágenes para mostrar</h1>
                <h1>Empieza a subir tus recuerdos</h1>
            </div>
        </div>
    )
}
