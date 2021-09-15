import { useContext } from 'react';
import { AuthContext } from '../contexts/AutContext';

export function useAuth() {
    const value = useContext(AuthContext);

    return value;
}