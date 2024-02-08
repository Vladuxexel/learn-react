import { ReactNode } from 'react';
import { Footer } from '../footer/component';
import { Header } from '../header/component';
import styles from './styles.module.scss';
import { User } from '@models';

export const Layout = ({
    children,
    onUserLogin
}: {
    children: ReactNode;
    onUserLogin: (user: User | null) => void;
}) => {
    return (
        <div className={styles.layout}>
            <Header title="Restaurants App" onUserLogin={onUserLogin} />
            <section className={styles.layout__container}>{children}</section>
            <Footer />
        </div>
    );
};
