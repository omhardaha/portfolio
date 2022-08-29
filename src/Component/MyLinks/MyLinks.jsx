import React from 'react'
import "./MyLinks.css"
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { SiLeetcode, SiCodechef, SiGmail } from 'react-icons/si';

export default function MyLinks() {
    return (
        <div className=' my-40'>
            <h1 className='sm:text-7xl text-5xl my-5 font-grypen'>
                {/* My Links */}
                Feel Free To Connect With Me 
            </h1>
            <div className='flex text-4xl  flex-col items-center '>
                <div className='flex flex-row items-center flex-wrap font-typerwriter justify-center'>

                    <a className='hover:scale-125 hover:text-grey-500  transition ease-in-out duration-300' rel='noreferrer' target="_blank" href='https://github.com/omhardaha'>
                        <AiFillGithub title='LinkedIn' className='m-8 mb-0  ' /> <span className='text-lg'>Github</span>
                    </a>

                    <a className='hover:scale-125 hover:text-blue-700  transition ease-in-out duration-300' rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/om-prakash-hardaha-5aaabb208/'>
                        <BsLinkedin title='LinkedIn' className='m-8 mb-0  ' /> <span className='text-lg'>LinkedIn</span>
                    </a>

                    <a className='hover:scale-125 hover:text-blue-300  transition ease-in-out duration-300' rel='noreferrer' target="_blank" href='https://twitter.com/omhardaha'>
                        <BsTwitter title='Twitter' className='m-8 mb-0 ' /> <span className='text-lg'>Twitter</span>
                    </a>

                    <a className='hover:scale-125 hover:text-orange-500  transition ease-in-out duration-300' rel='noreferrer' target="_blank" href='https://leetcode.com/omhardaha1/'>
                        <SiLeetcode title='Leetcode' className='m-8 mb-0 ' /> <span className='text-lg'>Leetcode</span>
                    </a>

                    <a className='hover:scale-125 hover:text-yellow-300  transition ease-in-out duration-300' rel='noreferrer' target="_blank" href='https://www.codechef.com/users/omhardaha1'>
                        <SiCodechef title='Codechef' className='m-8 mb-0 ' /> <span className='text-lg'>Codechef</span>
                    </a>

                    <a className='hover:scale-125 hover:text-red-500  transition ease-in-out duration-300' title='omprakashhardaha369@gmail.com' rel='noreferrer' target="_blank" href='mailto:john@example.com?Subject=Hello'>
                        <SiGmail className='m-8 mb-0 ' /> <span className='text-lg'>Mail</span>
                    </a>

                </div>
            </div>

        </div>
    )
}
