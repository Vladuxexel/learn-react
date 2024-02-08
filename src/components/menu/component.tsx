import { Dish as TDish } from '@models';
import { Dish } from '../dish/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Menu = ({ menu }: { menu: TDish[] }) => {
    return (
        <div className={classNames(styles.menu)}>
            <h3>Menu:</h3>
            <ul className={styles['menu-items']}>
                {menu.map((dish) => (
                    <li>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
