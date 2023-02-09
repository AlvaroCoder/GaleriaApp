import React, {  useState, useEffect } from 'react';
import { EmptyGallery } from './GalleryCard';
import ListGallery from './ListGallery';
import NavBarTop from './NavBarTop';
import Popup from './Popup';
import { CircularProgress } from '@mui/material';

function Home() {
  const [trigger, setTrigger] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const changeTrigger = (evt) => {
    evt.preventDefault();
    setTrigger(!trigger);
  }
  const changeLoading=()=>{
    setLoadingPage(!loadingPage)
  }
  useEffect(() => {
    function getImages() {
      fetch('http://localhost:8084/show/images').then((val) => {
        if (val.ok) {
          return val.json()
        }
      }).then((val) => {
        setLoading(false)
        if (val[0]) {
          setImageList(val);
        }else{
          setImageList([]);
        }
      })
    }
    getImages()
  }, [])

  return (
    !loadingPage ? <div className='w-[90%] h-screen flex flex-col'>
    <NavBarTop>
      <div className=''>
        <button className='text-white pl-5 pr-5 pt-2 pb-3 bg-gradient-to-r from-orange to-red' onClick={changeTrigger}>Upload a photo</button>
      </div>
    </NavBarTop>
    <Popup trigger={trigger} changeTrigger={changeTrigger} changeLoading={changeLoading} />
    <div className=' h-auto flex flex-col justify-center '>
      {
        !loading ? 
          imageList[0] ? <ListGallery imageList={imageList} /> 
          : <EmptyGallery/>
        :  <div className='cursor-progress'>
            <h1>Cargando Imagenes</h1>
            </div>
      }
    </div>
</div> : <div className='w-full h-screen bg-white z-50 flex justify-center items-center'>
  <CircularProgress
   ></CircularProgress>
</div>)
}

export default Home;