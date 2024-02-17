import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { UserName } from '../user-name/component';
import { selectReviewById } from '../../redux/entities/review/selectors';

export const Review = ({ id }: { id: string }) => {
    const review = useSelector((state: RootState) => selectReviewById(state, id));

    return (
        <div className={styles.review}>
            <span>
                <UserName id={review.userId} />: {review.rating}*
            </span>
            <span>{review.text}</span>
        </div>
    );
};
