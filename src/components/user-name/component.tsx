import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { selectUserById } from '../../redux/entities/user/selectors';

export const UserName = ({ id }: { id: string }) => {
    const user = useSelector((state: RootState) => selectUserById(state, id));

    return <span>{user.name}</span>;
};
