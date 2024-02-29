import styles from './styles.module.scss';
import { NormalizedReview } from '../../models/review';
import { useGetUsersQuery } from '../../redux/services/api';

export const Review = ({ review }: { review: NormalizedReview }) => {
    const { data: users } = useGetUsersQuery();

    if (!review) {
        return <span>Loading...</span>;
    }

    return (
        <div className={styles.review}>
            <span>
                {users?.find((user) => user.id === review.userId)?.name}: {review.rating}*
            </span>
            <span>{review.text}</span>
        </div>
    );
};
