import { Action } from '@models';
import { User } from '../../models/user';
import { useReducer } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';

const INITIAL_VALUE: User = {
    name: '',
    email: ''
};

const reducer = (state: User, { type, payload }: Action<number | string>): User => {
    switch (type) {
        case 'setName':
            return { ...state, name: String(payload) };
        case 'setEmail':
            return { ...state, email: String(payload) };
        default:
            return state;
    }
};

export const AuthorizationForm = ({ onAuthorize }: { onAuthorize: (user: User) => void }) => {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    return (
        <div className={styles['authorization-form']}>
            <label htmlFor="user-name">
                Name:
                <input
                    className={styles.field}
                    id="user-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => dispatch({ type: 'setName', payload: event.target.value })}
                />
            </label>
            <label htmlFor="user-email">
                Email:
                <input
                    className={styles.field}
                    id="user-email"
                    type="text"
                    value={form.email}
                    onChange={(event) => dispatch({ type: 'setEmail', payload: event.target.value })}
                />
            </label>
            <Button disabled={!form.name || !form.email} onClick={() => onAuthorize(form)}>
                Войти
            </Button>
        </div>
    );
};
