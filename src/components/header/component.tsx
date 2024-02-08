import { useContext } from 'react';
import { Size } from '../../constants/size';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user-context';
import { User } from '@models';

const fakeUser: User = {
    name: 'Vasily',
    email: 'yavasily@mail.ru'
};

export const Header = ({ title, onUserLogin }: { title: string; onUserLogin: (user: User | null) => void }) => {
    const user = useContext(UserContext);

    const setFakeUser = (data: User | null) => onUserLogin(data);

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
            <div className={styles['header__user-data']}>
                {!user && (
                    <Button size={Size.l} onClick={() => setFakeUser(fakeUser)}>
                        Login
                    </Button>
                )}
                {user && (
                    <div className={styles['header__user-logout-data']}>
                        <span className={styles['header__user-name']}>{user.name}</span>
                        <Button onClick={() => setFakeUser(null)}>Logout</Button>
                    </div>
                )}
            </div>
        </header>
    );
};
