import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

export const Restaurant = ({ id, className }: { id: string; className: string }) => {
    const { contextUser } = useContext(UserContext);
    const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <div className={classNames(styles.restaurant, className)}>
            <h1>{restaurant.name}</h1>
            <Menu dishIds={restaurant.menu} />
            <Rating reviewIds={restaurant.reviews} />
            {contextUser && <ReviewForm onReviewSent={(review) => console.log(review)} />}
        </div>
    );
};
