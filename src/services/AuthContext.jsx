import { createContext, useContext, useState} from 'react';
import supabase from "../services/supabase.js";

export const AuthContext = createContext();
export const AppContext = createContext();
export const admin = "c3ec8e43-b2cd-48b2-b1a4-93e02d188ef2"
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem('jwtToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        try {
            const { data, error } = await supabase.from('Query Items').select('*');
            if (error) {
                throw error;
            }
            data && setItems(data);
        } catch (error) {
            console.error('Something went wrong', error);
        }
    };

    return (
        <AppContext.Provider value={{ items, setItems,  getItems, admin }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const useAppContext = () => {
    return useContext(AppContext);
};