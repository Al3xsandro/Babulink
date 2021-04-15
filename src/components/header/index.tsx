import React from 'react'
import { Header } from './style';

// Material UI
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';

export const HeaderMenu: React.FC = () => {
    return (
        <Header>
            <div className="title">
                <h1>Babulink</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/"><HomeIcon style={{fontSize: '16'}}/> Inicio</a>
                        <a href="/history"><HistoryIcon style={{fontSize: '16'}}/> Histórico</a>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}