import { MenuItem as TMenuItem } from '@models';
import styles from './styles.module.scss';

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
    return (
        <div className={styles['menu-item']}>
            <span>
                {menuItem.name} <b>{menuItem.price}$</b>
            </span>
            <span>Ingredients: {menuItem.ingredients.join(', ')}</span>
        </div>
    );
};
