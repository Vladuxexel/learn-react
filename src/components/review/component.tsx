import styles from './styles.module.scss';
import { NormalizedReview } from '../../models/review';
import { useGetUsersQuery } from '../../redux/services/api';
import { UserContext } from '../../contexts/user-context';
import { useContext } from 'react';

export const Review = ({ review }: { review: NormalizedReview }) => {
    const { contextUser } = useContext(UserContext);
    const { data: users } = useGetUsersQuery();

    if (!review) {
        return <span>Loading...</span>;
    }

    const user = users?.find((user) => user.id === review.userId) ?? contextUser;

    return (
        <div className={styles.review}>
            <span>
                {user?.name}: {review.rating}*
            </span>
            <span>{review.text}</span>
        </div>
    );
};
