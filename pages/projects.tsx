import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const Projects=()=> {
  return (
    <div className='p-4'>
     
      <nav>Navbar</nav>
      <div className='grid gid-col-12 gap-4 my-3'>
        {
        projects.map((project,i) =>{
          return(
          <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <ProjectCard project={project} key={project.name}/>
          </div>
          )
        }
        )
        }    

      </div>

    </div>
  );
};

export default Projects
