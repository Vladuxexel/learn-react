import styles from './styles.module.scss';
import { AuthorizationControl } from '../authorization-control/component';
import { CartButtonContainer } from '../cart-button/container';

export const Header = ({ title }: { title: string }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
            <div className={styles['header__interactions-block']}>
                <CartButtonContainer />
                <AuthorizationControl />
            </div>
        </header>
    );
};
