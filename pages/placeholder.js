import Styles from '../styles/placeholder.module.css'
import { useState } from 'react';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { posts: data }

    }
}

const placeholder = ({ posts }) => {
    console.log([posts])
    const [post, setPost] = useState('')
    return (
        <div>
            <div className={Styles.container}>
                <h1>All Posts</h1>
            </div>
            <div className={Styles.selectcontainer}>
                <select className={Styles.select} onChange={(e) => setPost(e.target.value)}>
                    {posts.map(post => (

                        <option key={post.id} value={post.title}>{post.title}</option>

                    ))}
                </select>

            </div>
            <div className={Styles.postcontainer}>
                <p>{post}</p>
            </div>
        </div>
    );
}

export default placeholder;