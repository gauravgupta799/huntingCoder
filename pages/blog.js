import React from 'react';
import styles from "../styles/BlogPost.module.css";
import Link from "next/link";


const Blog = () => {
    return (
        <div className={styles.blogpostContiner}>
            <div className={styles.blogsWrapper}>
                <div className={styles.blogItem}>
                <Link href={"/blogpost/learn-jacscript"}>
                    <h3 className={styles.blogTitle}>How to learn Javascript 2022?</h3>
                </Link>
                    <p>To learn Javascript, you have to open this link for full details descriptions</p>
                </div>
                <div className={styles.blogItem}>
                    <h3 className={styles.blogTitle}>How to learn Javascript 2022?</h3>
                    <p>To learn Javascript, you have to open this link for full details descriptions</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
