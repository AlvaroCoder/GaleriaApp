const URI_DATABASE = 'http://localhost:8084/'

export function GetUrlDatabase() {
    return URI_DATABASE
}

export function GetPhotos() {
    return fetch(URI_DATABASE+'show/images',{
        method : 'GET',
        mode : 'cors'
    }).then((res)=>{
        if (res.ok  ) {
            return res.json()
        }
    })
}

export function GetDetailsPhoto(idPhoto) {
    return fetch(URI_DATABASE+'show/detailImage/'+idPhoto,{
        method : 'GET',
        mode : 'cors'
    }).then((res)=>{
        if (res.ok) {
            return res.json()
        }
    })
}

export function DeletePhoto(idPhoto) {
    return fetch(URI_DATABASE+'deleteImage/'+idPhoto,{
        method : 'DELETE',
        mode:'cors'
    }).then((res)=>{
        if (res.ok) {
            return res
        }
    })
}

export function CreatePhoto(){

    
}