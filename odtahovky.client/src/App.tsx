//React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app/layout/AppLayout';
//CSS
import './App.css';
import './normalize.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
    }
]);

const App = () => {
    return(
    <>
        <RouterProvider router={router} />
    </>)
}

export default App;