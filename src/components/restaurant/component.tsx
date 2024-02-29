import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { useGetRestaurantQuery, useGetRestaurantReviewsQuery } from '../../redux/services/api';

export const Restaurant = ({ id, className }: { id: string; className: string }) => {
    const { contextUser } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantQuery(id);
    const { data: reviews } = useGetRestaurantReviewsQuery(id);

    if (!restaurant || !reviews) {
        return <span>Loading...</span>;
    }

    return (
        <div className={classNames(styles.restaurant, className)}>
            <h1>{restaurant.name}</h1>
            <Menu dishIds={restaurant.menu} />
            <Rating reviews={reviews} />
            {contextUser && <ReviewForm onReviewSent={(review) => console.log(review)} />}
        </div>
    );
};
