import React, { useState } from 'react';
import { Container, Form } from './style';

export const TextInput: React.FC = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const [active, setActive] = useState(false)

    const handleChange = (event) => {
        setValue(event.target.value)
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
            console.log(response.data)
            setActive(true)
        })
    }

    return (
        <Container>
            <div>
                <img className="logo" src="/img/desktop.svg" alt="desktop"/>
            </div>
            <Form>
                {
                    !active ? ( 
                        <>
                            <input className="input" placeholder="Digite a url" onChange={handleChange} />  
                            <button className="button" type="button" onClick={handleClick}>Encurtar</button>
                        </>
                    ) : (
                        <>
                          <label>{`https://babulink.herokuapp.com/${result}`}</label>
                          <button className="button" type="button">Copiar</button>
                        </>
                    )

                }
            </Form>
        </Container>
    )
}
