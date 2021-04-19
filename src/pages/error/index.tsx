import React from 'react';
import { HeaderMenu } from '../../components/header';

import { Container } from './style';

export const NotFound: React.FC = () => {
    return (
        <>
            <HeaderMenu/>
            <Container>
                <img className="error" src="/img/404.svg" alt="404"/>
                <a href="/">Voltar ao inicio</a>
            </Container>
        </>
    )
}