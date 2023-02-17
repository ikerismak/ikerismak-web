import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/works'

export const Project = () => {

    const[project,setProject] = useState({});

    //recoger el valor del parametro para mostrar el proyecto

    const params = useParams()

    useEffect(() =>{

        //filtra los proyectos por el id que coincide con los url params
        console.log(works)

        let project = works.filter(work => work.nombre === params.nombre);

        console.log(params.id);

        //con el indice te ayuda a cargar el proyecto que existe
        setProject(project[0]);
        console.log(project[0]);

    }, []);

  return (

    <div>
        <h1 className='heading'> {project.nombre}<a className='link-deploy' href={"http://"+ project.url} target= "_blank"> - Go to project</a></h1>

        <p>{project.tecnologias}</p>
        <p>{project.descripcion}</p>

        <div className='image-container-project'>
            <img src={"/images/" + project.id + ".png"} alt="" />
        </div>







    </div>
  )
}
