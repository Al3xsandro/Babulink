import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';

import Globalstyle from './styles/Globalstyle';

export default function App(){
    return (
        <>
            <Globalstyle/>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </>
    )
}