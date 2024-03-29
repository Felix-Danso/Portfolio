import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const Projects = () => {
    return (
        <div className='p-4'>
            {/* Replace the <nav> element with an actual navigation component */}
            <nav>Navbar</nav>
            <div className='grid grid-cols-12 gap-4 my-3'>
                {projects.map((project, i) => (
                    <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <ProjectCard project={project} key={project.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
