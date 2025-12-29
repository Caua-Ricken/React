import { createContext, useReducer } from "react";
import question from '../data/questions'

const stages = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: stages[0],
    question,
    currentQuestion: 0,
}

const quizReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_STATE':
          return {
            ...state,
            gameStage: stages[1],
          };

        case 'REORDER_QUESTIONS':
            const reorder = question.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                question: reorder,
            }

        case 'CHANGE_QUESTION':
            const nextQuest = state.currentQuestion + 1    
            return {
                ...state,
                currentQuestion: nextQuest,
            }


        default:
            return state;  
    }
}


export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return < QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}