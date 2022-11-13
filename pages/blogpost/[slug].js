import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router';;
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const [blog, setBlog] = useState("");
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then(res => res.json())
      .then((data) => setBlog(data));
  },[router]); 

  return (
     <div className={styles.blogpostContiner}>
       <div className={styles.blogsWrapper}>
          <h2 style={{textAlign: 'center'}}>
          {blog && blog.title} 
          </h2>
          <p>
          {blog && blog.content}
          </p>
       </div>
    </div>
  )
}

export default Slug
