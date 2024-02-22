import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user-context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { getDishes } from '../../redux/entities/dish/thunks/get-dishes';
import { getReviews } from '../../redux/entities/review/thunks/get-reviews';

export const Restaurant = ({ id, className }: { id: string; className: string }) => {
    const { contextUser } = useContext(UserContext);
    const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getDishes(id));
        dispatch(getReviews(id));
    }, [dispatch, id]);

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
