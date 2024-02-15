import { User } from '@models';
import React from 'react';

export const UserContext = React.createContext<{
    contextUser: User | null;
    setContextUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({ contextUser: null, setContextUser: () => ({}) });
