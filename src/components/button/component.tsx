import { MouseEventHandler, ReactNode } from 'react';
import styles from './styles.module.scss';
import { Size } from '../../constants/size';
import classNames from 'classnames';

const SizeClass = {
    [Size.s]: styles.s,
    [Size.m]: styles.m,
    [Size.l]: styles.l
};

export const Button = ({
    children,
    onClick,
    disabled,
    size = Size.m
}: {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    size?: string;
}) => {
    return (
        <button
            disabled={disabled}
            className={classNames(styles.button, SizeClass[size] || SizeClass[Size.m])}
            onClick={onClick}>
            {children}
        </button>
    );
};
