import styles from './styles.module.scss';

export const Header = ({ title }: { title: string }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
        </header>
    );
};
