import styles from './styles.module.scss';
import { Menu } from '../menu/component';
import { Rating } from '../rating/component';
import classNames from 'classnames';
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import {
    useCreateReviewMutation,
    useGetRestaurantQuery,
    useGetRestaurantReviewsQuery,
    useUpdateReviewMutation
} from '../../redux/services/api';

export const Restaurant = ({ id, className }: { id: string; className: string }) => {
    const { contextUser } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantQuery(id);
    const { data: reviews, isFetching: areReviewsFetching, refetch } = useGetRestaurantReviewsQuery(id);
    const [createReview, { isLoading: isReviewSending }] = useCreateReviewMutation();
    const [updateReview, { isLoading: isReviewUpdating }] = useUpdateReviewMutation();

    if (!restaurant || !reviews) {
        return <span>Loading...</span>;
    }

    return (
        <div className={classNames(styles.restaurant, className)}>
            <h1>{restaurant.name}</h1>
            <Menu dishIds={restaurant.menu} />
            {isReviewUpdating ? (
                <span>Loading...</span>
            ) : (
                <Rating
                    reviews={reviews}
                    onReviewEdited={async (reviewId, review) => {
                        await updateReview({ reviewId, review });
                        refetch();
                    }}
                />
            )}
            {contextUser && (
                <ReviewForm
                    isLoading={isReviewSending || areReviewsFetching}
                    onReviewSent={async (review) => {
                        await createReview({ restaurantId: id, review });
                        refetch();
                    }}
                />
            )}
        </div>
    );
};
