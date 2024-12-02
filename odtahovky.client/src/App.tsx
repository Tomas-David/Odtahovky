//React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './app/layout/AppLayout';
import Home from './app/pages/Home';
//CSS
import './App.css';
import './normalize.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    }
]);

const App = () => {
    return(
    <>
        <RouterProvider router={router} />
    </>)
}

export default App;