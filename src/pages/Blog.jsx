import { useEffect } from "react"

import BlogCard from "../components/BlogCard"

export default function Blog () {
    useEffect(() => {
        document.title = "Mon blog - John Doe"
    }, [])

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container">
                <div className="text-center">
                    <h2 className="text-uppercase">blog</h2>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div className='border-bottom w-25 m-auto border-3 blog-border'></div>
                </div>

                <div className="my-3">
                    <BlogCard/>
                </div>
            </div>
        </div>
    )
}