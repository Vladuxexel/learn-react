import { useContext, useReducer } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { Action, ReviewFormData } from '@models';
import { UserContext } from '../../contexts/user-context';

const INITIAL_VALUE: ReviewFormData = {
    name: '',
    text: '',
    rating: 0
};

const reducer = (state: ReviewFormData, { type, payload }: Action<number | string | null>): ReviewFormData => {
    switch (type) {
        case 'setText':
            return { ...state, text: String(payload) };
        case 'setRating':
            return { ...state, rating: Number(payload) };
        case 'resetData':
            return { ...state, text: '', rating: 0 };
        default:
            return state;
    }
};

export const ReviewForm = ({
    onReviewSent,
    isLoading,
    initialValue
}: {
    onReviewSent: (review: ReviewFormData) => void;
    isLoading?: boolean;
    initialValue?: ReviewFormData;
}) => {
    const [form, dispatch] = useReducer(reducer, initialValue ?? INITIAL_VALUE);
    const { contextUser } = useContext(UserContext);

    return (
        <div className={styles.form}>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <span className={styles['form__user-name']}>{contextUser?.name}:</span>
                    <label htmlFor="text">
                        Text:
                        <input
                            className={styles.field}
                            id="text"
                            type="text"
                            value={form.text}
                            onChange={(event) => dispatch({ type: 'setText', payload: event.target.value })}
                        />
                    </label>
                    <label htmlFor="rating">
                        Rating:
                        <input
                            className={styles.field}
                            id="rating"
                            type="number"
                            min="0"
                            max="5"
                            value={form.rating}
                            onChange={(event) => dispatch({ type: 'setRating', payload: event.target.value })}
                        />
                    </label>
                    <Button
                        onClick={() => {
                            onReviewSent({ ...form, name: contextUser?.name || '' });
                            dispatch({ type: 'resetData', payload: null });
                        }}>
                        Отправить
                    </Button>
                </>
            )}
        </div>
    );
};
