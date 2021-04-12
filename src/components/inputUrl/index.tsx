import React, { useState } from 'react';
import { Container, Section } from './style';

export const TextInput: React.FC = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const [active, setActive] = useState(false)

    const handleChange = (event) => {
        return setValue(event.target.value)
    }

    function handleClick() {
        fetch('https://babulink.herokuapp.com/add', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "url": value})
        })
        .then((response) => response.json())
        .then((response) => {
            setResult(response.data)
            setActive(true)
        })

        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <Container>
            <Section>
                {
                    !active ? ( 
                        <>
                            <div className="title">
                                <h1>Babulink</h1>
                                <p>Diga adeus para urls grandes, encurte gratuitamente no campo abaixo.</p>
                            </div>
                            <form onSubmit={handleClick}>
                                <input className="input" placeholder="Digite a url" onChange={handleChange} />  
                                <button className="button" type="button" onClick={handleClick}>Encurtar</button>
                            </form>
                        </>
                    ) : (
                        <div className="result">
                          <h1>Babulink</h1>

                          <label>{`https://babulink.herokuapp.com/${result}`}</label>
                          <button className="copyButton" type="button">Copiar</button>
                        </div>
                    )

                }
            </Section>
        </Container>
    )
}
