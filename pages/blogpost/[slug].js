import React from 'react';
import { useRouter } from 'next/router';;
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
    const router = useRouter();
    console.log(router.query)
    const { slug } = router.query;

  return (
     <div className={styles.blogpostContiner}>
       <div className={styles.blogsWrapper}>
          <h2 style={{textAlign: 'center'}}>The title of page: {slug}</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
          </p>
       </div>
    </div>
  )
}

export default Slug
