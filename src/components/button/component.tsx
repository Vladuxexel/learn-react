import { MouseEventHandler, ReactNode } from 'react';
import styles from './styles.module.scss';

export const Button = ({
    children,
    onClick,
    disabled
}: {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}) => {
    return (
        <button disabled={disabled} className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};
