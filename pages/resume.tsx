import React from 'react'
import Bar from '../components/Bar'
import { languages,tools } from '../data'

const resume=()=> {
  return (
    <div className='px-6 py-2'>
    {/* Education and expirence */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className='my-3 text-2xl font-bold'>Education</h5>
      <div>
        <h5 className='my-2 text-2xl font-bold'>Information Technology</h5>
        <p className='font-semibold'>Takoradi Technical University (2019 To 2022)</p>
        <p className='my-3'>
          I am currently pursing B-tech in Software<br/> Engineering in 
          Takoradi Techical University.
        </p>
        </div>
      </div>
      <div>
        <h5 className='my-3 text-2xl font-bold'>Experince</h5>
      <div>
        <h5 className='my-2 text-2xl font-bold'>Software Engineer Jn</h5>
        <p className='font-semibold'>NSP (2022 on)</p>
        <p className='my-3'>
          I just like want I do.
        </p>
        </div>
      </div>
    </div>
    
    {/* language and tools */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
      <h5 className="text-2xl font-bold my-e">Language & Frameworks</h5>
      <div className="my-2">
        {
          languages.map(language =><Bar data={language} key={language.name}/>)
        }
        </div>
      </div>
      <div>
      <h5 className="text-2xl font-bold my-e">Tools & softwares</h5>
      <div className="my-2">
        {
          tools.map(tool=><Bar data={tool} key={tool.name}/>)
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default resume
