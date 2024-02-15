import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user-context';
import { Button } from '../button/component';
import { Size } from '../../constants/size';
import { Modal } from '../modal/component';
import { AuthorizationForm } from '../authorization-form/component';

export const AuthorizationControl = () => {
    const { contextUser, setContextUser } = useContext(UserContext);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <div className={styles['authorization-control__user-data']}>
            {contextUser ? (
                <div className={styles['authorization-control__user-logout-data']}>
                    <span className={styles['authorization-control__user-name']}>{contextUser.name}</span>
                    <Button onClick={() => setContextUser(null)}>Logout</Button>
                </div>
            ) : (
                <Button size={Size.l} onClick={() => setIsAuthModalOpen(true)}>
                    Login
                </Button>
            )}
            {isAuthModalOpen && (
                <Modal onClose={() => setIsAuthModalOpen(false)}>
                    <AuthorizationForm
                        onAuthorize={(user) => {
                            setContextUser(user);
                            setIsAuthModalOpen(false);
                        }}
                    />
                </Modal>
            )}
        </div>
    );
};
