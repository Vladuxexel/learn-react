import styles from './styles.module.scss';
import { NormalizedReview } from '../../models/review';
import { useGetUsersQuery } from '../../redux/services/api';
import { UserContext } from '../../contexts/user-context';
import { useContext, useState } from 'react';
import { Button } from '../button/component';
import { Size } from '../../constants/size';
import { ReviewFormData } from '../../models/review-form-data';
import { ReviewForm } from '../review-form/component';

export const Review = ({
    review,
    onReviewEdited
}: {
    review: NormalizedReview;
    onReviewEdited?: (review: ReviewFormData) => void;
}) => {
    const [isEditingState, setIsEditingState] = useState(false);
    const { contextUser } = useContext(UserContext);
    const { data: users } = useGetUsersQuery();

    if (!review) {
        return <span>Loading...</span>;
    }

    const user = users?.find((user) => user.id === review.userId) ?? contextUser;

    return (
        <>
            {isEditingState ? (
                <div className={styles['review__editing-mode']}>
                    <ReviewForm
                        initialValue={{ name: contextUser?.name ?? '', rating: review.rating, text: review.text }}
                        onReviewSent={(review) => {
                            onReviewEdited?.(review);
                            setIsEditingState(false);
                        }}
                    />
                    <Button
                        size={Size.s}
                        className={styles['review__edit-button']}
                        onClick={() => setIsEditingState(false)}>
                        Cancel
                    </Button>
                </div>
            ) : (
                <div className={styles.review}>
                    <div className={styles['review__data']}>
                        <span>
                            {user?.name}: {review.rating}*
                        </span>
                        <span>{review.text}</span>
                    </div>
                    {user === contextUser && (
                        <Button
                            size={Size.s}
                            className={styles['review__edit-button']}
                            onClick={() => setIsEditingState(true)}>
                            Edit
                        </Button>
                    )}
                </div>
            )}
        </>
    );
};
