import { Dish } from '../dish/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Menu = ({ dishIds }: { dishIds: string[] }) => {
    return (
        <div className={classNames(styles.menu)}>
            <h3>Menu:</h3>
            <ul className={styles['menu-items']}>
                {dishIds.map((id) => (
                    <li>
                        <Dish id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
