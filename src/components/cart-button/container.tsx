import { useSelector } from 'react-redux';
import { CartButton } from './component';
import styles from './styles.module.scss';
import { selectAllDishes, selectAllDishesAmount } from '../../redux/ui/cart';
import { useState } from 'react';
import { Modal } from '../modal/component';
import { Dish } from '../dish/component';

export const CartButtonContainer = () => {
    const amount = useSelector(selectAllDishesAmount);
    const selectedDishIds = useSelector(selectAllDishes);
    const [isCartVisible, setIsCartVisible] = useState(false);

    return (
        <>
            <div className={styles['button-container']}>
                <CartButton
                    amount={amount}
                    onClick={() => {
                        if (amount > 0) {
                            setIsCartVisible(true);
                        }
                    }}></CartButton>
            </div>
            {isCartVisible && (
                <Modal onClose={() => setIsCartVisible(false)}>
                    {selectedDishIds.map((id) => (
                        <Dish id={id} />
                    ))}
                </Modal>
            )}
        </>
    );
};
