import React, { useState } from 'react';
function Popup({ trigger, changeTrigger, changeLoading }) {

    const [images, setImages] = useState({ preview: '', data: '' });
    const [widthContainer, setWidthContainer] = useState('1/2');
    const [element, setElement] = useState({
        title: "",
        description: ""
    });

    const onChangeImage = (evt) => {
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0]
        }
        if (evt.target.files[0].size > 26214400) {
            alert('No se pueden subir imágenes superior a 25MB')
        }
        else {
            setImages(img)
            setWidthContainer('3/4')
        }
    }
    const onChangeElements = (evt) => {
        const target = evt.target
        setElement({ ...element, [target.name]: target.value })
    }
    const emptyImages = evt => {
        setImages({ preview: '', data: '' })
    }
    const sendImage = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if (!images.data) {
            alert('Ingrese una imagen')
            return;
        }

        changeLoading();

        const formData = new FormData();
        formData.append('title', element.title);
        formData.append('description', element.description)
        formData.append('image', images.data);

        fetch("http://localhost:8084/crearImagen", {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then((val) => {
            if (val.ok) {
                changeLoading();
                alert('Se subio correctamente la imagen');
            }
        })

        setImages({ preview: '', data: '' });
        setWidthContainer('1/2');

    }
    return (trigger &&
        <div className="fixed top-0 left-0 w-full z-10  bg-background-popup h-[100%]  px-3 pt-10 flex justify-center font-InriaSerif">
            <div className='absolute top-2 pt-1 right-2 w-10 h-10 hover:bg-red-300 rounded-full flex justify-center items-center'><button onClick={changeTrigger}><span className="material-symbols-outlined">close</span></button></div>
            <div className={`w-${widthContainer} h-5/6 px-6 py-3 shadow-lg shadow-slate-400 rounded-lg bg-white flex flex-col space-y-4  justify-center transition duration-200`}>
                <div className=' w-full h-10 text-center text-2xl text-gray-700 '>
                    <h1 className='font-semibold'>Sube una nueva imagen</h1>
                </div>
                {
                    images.preview ?
                        <div className='w-full h-3/4 flex flex-row'>
                            <img className='h-full w-1/2 object-cover' src={images.preview} alt='Image'></img>
                            <div className='ml-4 w-1/2 h-full flex flex-col'>
                                <h1 className=''>Titulo </h1>
                                <input value={element.title} onChange={onChangeElements} name='title' type='text'
                                    className="h-10 w-full mb-2 border-white border-b-slate-400 border-2 border-opacity-50 rounded-sm focus:border-b-slate-700 outline-none p-2 transition duration-200"></input>
                                <h2 className='mb-2' >Descripción de la imagen</h2>
                                <textarea name='description' onChange={onChangeElements} value={element.description} className='w-full h-56 border-2 border-slate-400 focus:border-slate-700 outline-none border-opacity-50 rounded-lg p-2 '>

                                </textarea>
                            </div>
                        </div> : <div className='w-full h-3/4 '>
                            <label htmlFor='dropzone' className='w-full h-[100%] flex flex-col justify-center items-center rounded-lg border-2 border-gray-400 border-dashed cursor-pointer '>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className="material-symbols-outlined">upload_file</span>
                                    <p><span className='font-semibold'>Click para subir una imagen</span> o arrastra</p>
                                    <p>SVG, PNG, JPEG (MAX. 25MB)</p>
                                </div>
                            </label>
                            <input id='dropzone' onChange={onChangeImage} type='file' className='hidden'></input>
                        </div>
                }
                {
                    images.data && <div className='w-full h-10 flex flex-row justify-end'>
                        <button className=" w-[7rem] mr-2 bg-blue-600 text-white hover:bg-blue-300 hover:text-gray-600 text-sm ml-3 rounded-lg" onClick={sendImage}>Guardar</button>
                        <button className='w-[7rem] mr-2 bg-red-500 hover:bg-red-300 hover:text-gray-600 text-white rounded-lg' onClick={emptyImages}>Cancelar</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Popup;