import { Dish as TDish } from '@models';
import { Dish } from '../dish/component';
import styles from './styles.module.scss';

export const Menu = ({ menu }: { menu: TDish[] }) => {
    return (
        <div className={styles.menu}>
            <h3>Menu:</h3>
            <ul>
                {menu.map((dish) => (
                    <li>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
