
import styles from './Post.module.css';

interface IPostProps {
  author: string;
  content: string;
}

export const Post = (props : IPostProps) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/jonasdhein.png" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Developer</span>
          </div>
        </div>

        <time>Publicado há 1h</time>
      </header>
    </article>
  )
}
