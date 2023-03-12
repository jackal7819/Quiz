import './index.scss';
import { useState } from 'react';

const questions = [
    {
        title: 'React - this is ... ?',
        variants: ['library', 'framework', 'application'],
        correct: 0,
    },
    {
        title: 'Component - this is ... ',
        variants: ['apllication', 'part of application', 'I do not know'],
        correct: 1,
    },
    {
        title: 'JSX - this is?',
        variants: [
            'HTML',
            'function',
            'This is the same HTML, but with the ability to run JS code',
        ],
        correct: 2,
    },
    {
        title: 'What is the best?',
        variants: ['Vue', 'Angular', 'React'],
        correct: 2,
    },
    {
        title: 'What position do you like',
        variants: ['trainee', 'junior', 'senior'],
        correct: 0,
    },
];

function Result({ correct }) {
    return (
        <div className='result'>
            <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' alt='png' />
            <h2>
                You guessed {correct} out of {questions.length} answers
            </h2>
            <a href='/'>
                <button>Try again</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className='progress'>
                <div
                    style={{ width: `${percentage}%` }}
                    className='progress__inner'></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={index}>
                        {text}
                    </li>
                ))}
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        console.log(step, index);
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
        setStep(step + 1);
    };

    return (
        <div className='App'>
            {step !== questions.length ? (
                <Game
                    step={step}
                    question={question}
                    onClickVariant={onClickVariant}
                />
            ) : (
                <Result correct={correct} />
            )}
        </div>
    );
}

export default App;
