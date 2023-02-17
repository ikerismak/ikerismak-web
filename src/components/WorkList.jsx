import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'

export const WorkList = () => {
  return (
    <section className='works'>
     {
        works.map(work =>{
          return(
            <article className='work-item' key ={work.id}>

              <div className='mask'>


                <Link to={"/proyecto/" + work.id +"/"+ work.nombre}> <img src={"/images/" + work.id + ".png"} alt="" /></Link>

              </div>
              <span>{work.categorias}</span>
              <h3><Link to={"/proyecto/" + work.id +"/"+ work.nombre}>{work.nombre}</Link></h3>
              <h2>{work.tecnologias}</h2>

            </article>
          )
        })
      }
     </section>
  )
}
