import React from 'react'
import WorkBtn from './WorkBtn'

const GetStarted = () => {
    return (
        <div >
            <section className='flex justify-center items-center py-8	sm:py-28	flex-col '>
                <div className=' md:max-w-[50%] contents'>
                    <h2 className='text-white text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center'>Get started  Today.</h2>
                    <div className='w-64 mt-5'>
                        <WorkBtn />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetStarted