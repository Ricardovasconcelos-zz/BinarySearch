import React, { useState } from 'react';


function BinaryContent() {

    const [state, setState] = useState('input')

    const [hint, setHint] = useState(150)
    const [numHint, setNumHint] = useState(1)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(300)
    const start = () => {
        setMin(0)
        setMax(300)
        setNumHint(1)
        setHint(150)
        setState('starting')
}

    if (state === 'input') {
        return <button onClick={start}>Começar a jogar!</button>
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
            <div>
                <p>Acertei o número {hint} com {numHint} chutes!</p>
                <button onClick={start}>Iniciar Novamente! </button>
            </div>

        )
    }

    return (
        <div>
            <p>O seu número é o {hint}?</p>
            <button onClick={menor}>Menor!</button>
            <button onClick={acertou}>Acertou!</button>
            <button onClick={maior}>Maior!</button>
        </div>
    )
}

export default BinaryContent