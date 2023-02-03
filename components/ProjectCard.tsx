import {FunctionComponent} from 'react';
import { IProject } from '../type'
// import Image from 'next/image';

const ProjectCard:FunctionComponent<{
        project:IProject;
}>=({
        project:{
            name,
            image_path,
            category,
            deplayed_url,
            github_url,
            description,
            key_techs
        },
})=> {
  return (
    <div>
        <image src={image_path} alt={name} className="cursor-pointer"/>
        <p className='my-2 text-center'>{name}</p>
    </div>
  )
}

export default ProjectCard