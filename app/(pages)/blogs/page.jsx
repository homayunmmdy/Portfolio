import PageTitle from '@/app/components/PageTitle'
import Blogs from '@/app/components/Blogs'
import React from 'react'
import PageDescription from '@/app/components/PageDescription'

const BlogsPage = () => {
    return (
        <>
            <PageTitle titr="My blog" title="Recent Writings" />
            <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
                <PageDescription title="High-impact services to help your business" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo doloribus atque eligendi deleniti iusto." />
                <Blogs />
            </div>
        </>
    )
}

export default BlogsPage