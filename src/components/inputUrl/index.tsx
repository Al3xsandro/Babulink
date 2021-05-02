import React, { useState } from 'react';
import { Container, Section } from './style';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import { api } from '../../services/api';

type Event = {
    target: { value: React.SetStateAction<string>; }
}

export const TextInput: React.FC = () => {
    const url = process.env.REACT_APP_URL

    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const copy = url + `${result}`

    const [active, setActive] = useState(false)
    const [isCopy, setIsCopy] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e: Event) => {
        setValue(e.target.value)
    }
    
    function handleCopy() {
        setIsCopy(true)
        localStorage.setItem('url', copy)
    }

    async function handleClick() {
        const options = { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        await api.post('/add', {
            url: !value ? setError(true) : value,
            options
        })

        .then(response => {
            const data = response.data.data
            return (
            setResult(data),
            setActive(true)
            )
        })
    }
    return (
        <Container>
            <Section>
                {
                    !active ? ( 
                        <section>
                            <div className="title">
                                <h1>Babulink</h1>
                                <p>Diga adeus para urls grandes, encurte gratuitamente no campo abaixo.</p>
                            </div> 

                            <form onSubmit={handleClick}>
                                <input className="input" placeholder="Digite a url" onChange={handleChange} />  
                                <button className="button" type="button" onClick={handleClick}>Encurtar</button>
                                { error ? ( <div className="popup"><p>Preencha todos os campos!</p></div>) : !error}
                            </form>
                        </section>
                    ) : (
                        <>
                            <div className="result">
                                <h1>Babulink</h1>

                                <label>{`${copy}`}</label>
                                <CopyToClipboard text={copy}>
                                    <button className="copyButton" type="button" onClick={handleCopy}>Salvar</button>
                                </CopyToClipboard>
                            </div>
                            {
                                !isCopy ? (
                                    <></>
                                ) : (
                                    <div className="popup">
                                        <p>Url salva com sucesso e copiada para área de transferência!</p>
                                    </div>
                                )
                            }
                        </>
                    )
                }
            </Section>
        </Container>
    )
}
