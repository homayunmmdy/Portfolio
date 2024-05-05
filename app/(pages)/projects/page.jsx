import PageTitle from '@/app/components/PageTitle'
import Projects from '@/app/components/Projects'
import React from 'react'

const ProjectsPage = () => {
    return (
        <>
            <PageTitle titr="My projects" title="Recent Projects" />
            <div className='px-5 w-[98%] md:w-[92%] mx-auto py-12'>
                <Projects />
            </div>
        </>
    )
}

export default ProjectsPage