import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3" />

            <div className={styles.profile}>

                <img
                    className={styles.avatar}
                    src="https://github.com/jonasdhein.png" />

                <strong>Jonas Dhein</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20}/>Editar seu perfil</a>
            </footer>
        </aside>
    );
}