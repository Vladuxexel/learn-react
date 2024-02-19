import styles from './styles.module.scss';
import { AuthorizationControl } from '../authorization-control/component';

export const Header = ({ title }: { title: string }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
            <AuthorizationControl />
        </header>
    );
};
