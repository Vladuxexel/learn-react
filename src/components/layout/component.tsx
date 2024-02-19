import { ReactNode } from 'react';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import styles from './styles.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.layout}>
            <Header title="Restaurants App" />
            <section className={styles.layout__container}>{children}</section>
            <Footer />
            <div id="modal-container" />
        </div>
    );
};
