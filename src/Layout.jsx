import {Outlet} from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Contacts } from './components/Contact/Contact';

export default function Layout() {
    return (
        <div className={styles.App}>
            <Navbar/>
            <main><Outlet/></main>
            <Contacts/>
        </div>
    );
}

