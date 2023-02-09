import React,{useEffect,useState} from 'react'
import { GetDetailsPhoto, GetUrlDatabase } from '../Services/Connection';

function PopUpImage({imgUrl, img,changeTrigger, idImage}) {
    const url = imgUrl.split(" ").join("%20")
    console.log(url);
    const [details, setDetails] = useState(null);
    useEffect(() => {
        async function getData() {
            await GetDetailsPhoto(idImage).then((val)=>{
                setDetails(val);
            })
        }
        getData();
    }, [])
  return (
    <div className='fixed top-0 left-0 w-full z-10  bg-background-popup h-[100%]  px-3 pt-10 flex justify-center font-InriaSerif'>
        <div className='absolute top-2 pt-1 right-2 w-10 h-10 hover:bg-red-300 rounded-full flex justify-center items-center'><button onClick={changeTrigger}><span className="material-symbols-outlined">close</span></button></div>
        <div className='w-3/4 h-1/2 flex flex-row justify-center items-center p-4 rounded-lg bg-white'>
            <div className='w-52 h-64 '>
            <img src={imgUrl} alt={`${imgUrl}-alt`} className='object-cover'></img>
            </div>
            {
                details ? <div className='w-40 h-64 flex flex-col'>
                <h1>{details.title}</h1>
                <h2>{details.description}</h2>
                <time>{details.date_upload}</time>
                <a href={url} download={img} >Descargar</a>
            </div> : <p>Cargando datos</p>
            }
        </div>
    </div>
  )
}

export default PopUpImage;