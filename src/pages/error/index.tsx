import React from 'react';
import { HeaderMenu } from '../../components/header';

export const NotFound: React.FC = () => {
    return (
        <>
            <HeaderMenu/>
            <img className="error" src="/img/404.svg" alt="404"/>
        </>
    )
}