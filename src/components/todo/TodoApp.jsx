import { BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import './TodoApp.css';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider from './security/AuthContext';
import { useAuth } from './security/AuthContext';

function AuthenticatedRoute({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated){
        return children;
    }
    return <Navigate to='/'/>;
};


export default function TodoApp(){
    return (
        <div className="TodoApp">
        <AuthProvider>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<LoginComponent/>}/>
                <Route path="/welcome/:username" element={
                <AuthenticatedRoute>
                    <WelcomeComponent/>
                </AuthenticatedRoute>
                }/>
                <Route path="*" element={<ErrorComponent/>}/>
                <Route path="/todos" element={<ListTodosComponent/>}/>
                <Route path="/logout" element={<LogoutComponent/>}/>
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
        </AuthProvider>
        </div>
    )
};
