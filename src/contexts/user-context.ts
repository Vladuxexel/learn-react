import { User } from '@models';
import React from 'react';

export const UserContext = React.createContext<User | null>(null);
