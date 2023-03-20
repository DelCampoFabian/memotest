import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

type Imagenes = {
    imagenes: string[];
}

const MemoTest = ({imagenes}: Imagenes) => {
    const [resuelto, setResuelto] = useState<string[]>([])
    const [seleccionado, setSeleccionado] = useState<string[]>([])
    console.log(imagenes);
    

useEffect(() => {
if(seleccionado.length === 2){
    if(seleccionado[0].split("|")[1] === seleccionado[1].split("|")[1] ){
        setResuelto((resuelto) => resuelto.concat(seleccionado))
    }
    setTimeout(()=> {
        setSeleccionado([])
    },1000)
}
 
}, [seleccionado])

useEffect(()=> {
    if(resuelto.length === imagenes.length){
        alert("Ganaste")
        location.reload()
    }
}, [resuelto])


  return (
    <main>
        <a className='back' href='/'>Volver</a>
        <section>
        {
            imagenes.map((images: string) => {
                const [, url] = images.split("|")
                return (
                    <div
                    onClick={() => seleccionado.length < 2 && setSeleccionado(seleccionado => seleccionado.concat(images))} 
                    key={images} className='memotest__container'>
                        {
                        seleccionado.includes(images) || resuelto.includes(images) ? 
                        <img src={url}/>
                        :
                        <img src="https://icongr.am/clarity/search.svg?size=128&color=currentColor" />
                        }
                    </div>
                )
            })               
        }
        </section>
    </main>
  )
}

export default MemoTest