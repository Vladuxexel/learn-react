import { MouseEventHandler } from 'react';
import { Size } from '../../constants/size';
import { Button } from '../button/component';

export const CartButton = ({ amount, onClick }: { amount: number; onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <Button size={Size.l} onClick={onClick}>
            Cart: {amount}
        </Button>
    );
};
