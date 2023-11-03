import { createContext, useContext, useState} from 'react';
import supabase from "../services/supabase.js";

export const AuthContext = createContext();
export const AppContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        // Wyloguj sesję na stronie serwera (Supabase)
        await supabase.auth.signOut();

        // Wyczyść token JWT z lokalnego składowania
        localStorage.removeItem('jwtToken');

        // Zaktualizuj stan autentykacji na klienta
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
        <AppContext.Provider value={{ items, setItems,  getItems }}>
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