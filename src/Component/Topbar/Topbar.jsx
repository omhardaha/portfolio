import React from 'react'
import './Topbar.css'
import Typewriter from 'typewriter-effect';
export default function Topbar() {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 topbar-container  justify-center items-center align-center'>
                <div>

                    <div className=' flex items-center flex-col justify-center bold-name-container'>
                        <span className=' text-8xl drop-shadow-2xl	font-grypen'>
                            Hi, I am  <span className=' my-name-color my-name hover:scale-150'>
                                OM
                            </span>
                        </span>
                        <div className='text-6xl pt-8 font-typerwriter'>
                            <Typewriter
                                options={{
                                    strings: ['A Programmer', 'Full Stack Developer', 'Photographer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className=' flex items-center flex-col justify-center '>
                    <img alt='svg' src='./men.svg' className='h-64' />
                </div>
            </div>
        </>
    )
}
