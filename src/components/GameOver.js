import React from 'react'

import "./GameOver.css"

import { useContext, useEffect } from 'react';
import { QuizContext } from '../context/quiz';

import WelDone from "../img/weldone.svg";

const GameOver = () => {

    const [quizState , dispatch] = useContext(QuizContext);

    return (
        <div id='gameover'>
            <h2>Fim de jogo</h2>
            <p>Pontuação : {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={WelDone}></img>
            <button onClick={() => dispatch({type : "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver