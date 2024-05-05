"use client"
import { useEffect, useState } from 'react'
import Service from './Service'
import Link from 'next/link'

// const data = [
//     {
//         id: 1,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//         items: ["one", "two", "three"]
//     },
//     {
//         id: 2,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//     },
//     {
//         id: 3,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//     },
//     {
//         id: 4,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//     },
//     {
//         id: 5,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//     },
//     {
//         id: 6,
//         title: "Frontend Devloper",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.",
//     },
// ]
const Blogs = () => {
    const [data, setData] = useState(null)
    const [filterData, setfilterData] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(6);

    useEffect(() => {
        fetch('/api/Posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data.posts)
                setfilterData(data.posts.slice(0, pageSize))
                setLoading(false)
            })
    }, [pageSize])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No  data</p>

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = pageNumber * pageSize;
        setfilterData(data.slice(startIndex, endIndex));
    };
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filterData?.map(item => (
                    <Link key={item._id} href={`/Posts/${item._id}`} >
                        <Service title={item.title} desc={item.description} items={item.items} />
                    </Link>
                ))}
            </div>
            {data?.length < "6" ? null : <div className="flex justify-center my-6">
                {Array.from({ length: Math.ceil(data.length / pageSize) }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-4 py-2  ${currentPage === i + 1 ? "bg-black text-white" : "bg-white"
                            } rounded`}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>}
        </>
    )
}

export default Blogs