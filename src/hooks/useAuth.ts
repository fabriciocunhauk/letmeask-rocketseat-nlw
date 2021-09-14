import { useContext } from 'react';
import { AuthContext } from '../contexts/AutContext';

export const useAuth = () => {
    const value = useContext(AuthContext);

    return value;
}