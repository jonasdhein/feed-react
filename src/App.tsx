import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Jonas Dhein"
            content="Um post qualquer"
          />
          <Post 
            author="Diego F."
            content="Um novo post"
          />
        </main>
      </div>
    </div>
  )
}

export default App
