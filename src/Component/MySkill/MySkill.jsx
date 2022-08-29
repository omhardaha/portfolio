import React from 'react'
import "./MySkill.css"
import { DiJavascript1 } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiPython, SiMongodb,SiExpress, SiTailwindcss } from 'react-icons/si';

export default function MySkill() {
    return (
        <div className=' mt-40'>
            <h1 className='sm:text-7xl text-5xl my-5 font-grypen'>
                Tech Stacks
            </h1>
            <div className='flex text-4xl  flex-col items-center justify-items-center'>
                <div className='flex flex-row items-center flex-wrap font-typerwriter justify-center'>



                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <FaJava title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>Java</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiReact title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>React</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiNextdotjs title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>NextJS</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <DiJavascript1 title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>JavaScript</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiMongodb title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>MongoDB</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <FaDocker title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>Docker</span>
                    </a>

                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiTailwindcss title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>Tailwind</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiPython title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>Python</span>
                    </a>
                    <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <SiExpress title='LinkedIn' className='m-8 mb-0  hover:text-blue-500 hover:scale-150 transition ease-in-out duration-300' /> <span className='text-lg'>Node</span>
                    </a>

                </div>
            </div>

        </div>
    )
}
