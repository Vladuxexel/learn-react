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

export const Header = ({ title }: { title: string }) => {
    const { contextUser, setContextUser } = useContext(UserContext);

    const setFakeUser = (data: User | null) => setContextUser(data);

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{title}</h1>
            <div className={styles['header__user-data']}>
                {!contextUser && (
                    <Button size={Size.l} onClick={() => setFakeUser(fakeUser)}>
                        Login
                    </Button>
                )}
                {contextUser && (
                    <div className={styles['header__user-logout-data']}>
                        <span className={styles['header__user-name']}>{contextUser.name}</span>
                        <Button onClick={() => setFakeUser(null)}>Logout</Button>
                    </div>
                )}
            </div>
        </header>
    );
};
