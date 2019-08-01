import React, { useState } from 'react';

import './BinaryContent.css'
import {Button} from 'react-bootstrap'

function BinaryContent() {

    const [state, setState] = useState('input')

    const [hint, setHint] = useState(150)
    const [numHint, setNumHint] = useState(1)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1000)
    const start = () => {
        setMin(0)
        setMax(1001)
        setNumHint(1)
        setHint(500)
        setState('starting')
    }

    if (state === 'input') {
        return (
            <div className="Box">
                <h4>Binary Search</h4>
                <p>Pense em um número entre {min} e {max}, e diga se a máquina acertou!</p>
                <Button variant="success"onClick={start}>Começar a jogar!</Button>
            </div>
        )
    }

    const menor = () => {
        setNumHint(numHint + 1)
        setMax(hint)
        const nextHint = parseInt((hint - min) / 2) + min
        setHint(nextHint)
    }
    const maior = () => {
        setNumHint(numHint + 1)
        setMin(hint)
        const nextHint = parseInt((max - hint) / 2) + hint
        setHint(nextHint)
    }

    const acertou = () => {
        setState('Finish')
    }

    if (state === 'Finish') {
        return (
            <div className="Box">
                <h4>A busca foi concluída após {numHint} palpite(s)!</h4>
                <p>Seu número era {hint}</p>
                <Button variant="warning" onClick={start}>Iniciar Novamente! </Button>
            </div>

        )
    }

    return (
        <div className="Content">
            <div className="Main-Box">
            <p>O seu número é o {hint}?</p>
            <Button variant="danger" className="Button" onClick={menor}>Menor!</Button>
            <Button variant="success" className="Button" onClick={acertou}>Acertou!</Button>
            <Button variant="warning" className="Button" onClick={maior}>Maior!</Button>

            </div>
        </div>
    )
}

export default BinaryContent