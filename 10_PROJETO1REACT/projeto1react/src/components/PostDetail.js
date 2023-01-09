import styles from './PostDetail.module.css'

import { Link, NavLink } from 'react-router-dom'

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
        <NavLink to={`/posts/${post.id}`}>
          <img src={post.image} alt={post.title} />
        </NavLink>
        <NavLink to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        </NavLink>
        <p className={styles.createBy}>{post.createdBy}</p>
        <div className={styles.tags}>
            {post.tagsArrays.map((tag) => (
                <p key={tag.id}>
                    <span>#</span>
                    {tag}
                </p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
    </div>
  )
}

export default PostDetail