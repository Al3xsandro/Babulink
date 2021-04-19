import React from 'react';
import { HeaderMenu } from '../../components/header';

import { Container } from './style';

export const History: React.FC = () => {
    const data = []
    data.push(localStorage.getItem('url'))

    return (
        <>
            <HeaderMenu/>
            <Container>
                <section>
                    <h1>Babulink</h1>
                    <p>Ultima url encurtada por você!</p>
                    <label>{ data[0] === null ? 'Você precisar encurtar uma url' : data }</label>
                </section>
            </Container>
        </>
    )
}