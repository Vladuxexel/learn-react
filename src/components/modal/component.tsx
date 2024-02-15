import { ReactNode, useLayoutEffect, useRef } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';

export const Modal = ({ onClose, children }: { onClose: () => void; children: ReactNode }) => {
    const modalContainer = useRef<HTMLElement>(document.getElementById('modal-container'));

    useLayoutEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'visible';
        };
    }, []);

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
                <Button className={styles['modal__close-button']} onClick={onClose}>
                    X
                </Button>
                {children}
            </div>
        </div>,
        modalContainer.current!
    );
};
