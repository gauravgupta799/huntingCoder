import React,{useState, useEffect } from 'react';
import styles from "../styles/BlogPost.module.css";
import Link from "next/link";

const Blog = () => {
    const [blogs, setBlogs]= useState([]);
    useEffect(() =>{
        fetch("http://localhost:3000/api/blogs")
        .then(res => res.json())
        .then((data) =>setBlogs(data));
    },[]);

    return (
        <>
            <div className={styles.blogpostContiner}>
                {  blogs.map((item) =>{
                    return(
                        <>
                            <div className={styles.blogsWrapper} key={item.title}>
                                <div className={styles.blogItem}>
                                    <Link href={`/blogpost/${item.slug}`}>
                                        <h3 className={styles.blogTitle}>
                                        {item.title}
                                        </h3>
                                    </Link>
                                    <p>{item.content.substr(0,150)}....</p>
                                </div>              
                            </div>
                        </>
                    )
                    })
                } 
            </div>
        </>
    )
}

export default Blog