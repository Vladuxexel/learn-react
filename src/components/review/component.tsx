import { Review as TReview } from '@models';
import styles from './styles.module.scss';

export const Review = ({ review }: { review: TReview }) => {
    return (
        <div className={styles.review}>
            <span>
                {review.user}: {review.rating}*
            </span>
            <span>{review.text}</span>
        </div>
    );
};
