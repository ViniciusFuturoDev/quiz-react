import { quiz } from '@/data/quiz';
import { QuizQuestion } from './QuizQuestion';
import { useState } from 'react';
import { FinalScreen } from './FinalScreen';

interface Props {
  type: string;
  title: string;
  quizQuestions: string[];
  correctQuestion: number;
  currentQuestion: number;
  setCurrentQuestion: (i: number) => void;
}

export interface AccertsAndErrors {
  accerts: number;
  errors: number;
  itemIsCorrect: string;
}

export const Quiz = ({ type, title, quizQuestions, correctQuestion, currentQuestion, setCurrentQuestion }: Props) => {
  const [wasClicked, setClick] = useState<number | null>(null);
  const [clicks, setClicks] = useState<number[]>([]);
  const [accertsAndErrors, setAccertsAndErrors] = useState<AccertsAndErrors[]>([
    {
      accerts: 0,
      errors: 0,
      itemIsCorrect: '',
    },
  ]);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const checkQuestion = (index: number) => {
    if (wasClicked === null) {
      setClick(index);
      setTimeout(() => {
        setAccertsAndErrors([
          ...accertsAndErrors,
          {
            accerts: correctQuestion === index ? accertsAndErrors[currentQuestion].accerts + 1 : accertsAndErrors[currentQuestion].accerts,
            errors: correctQuestion !== index ? accertsAndErrors[currentQuestion].errors + 1 : accertsAndErrors[currentQuestion].errors,
            itemIsCorrect:
              correctQuestion === index
                ? (accertsAndErrors[currentQuestion].itemIsCorrect = 'Acertooou')
                : (accertsAndErrors[currentQuestion].itemIsCorrect = 'Errooouu'),
          },
        ]);
        setClicks([...clicks, index]);
        if (currentQuestion + 1 < quiz.length) {
          setCurrentQuestion(currentQuestion + 1);
          setClick(null);
        }
      }, 2000);
    }
  };

  const showFinal = () => {
    if (currentQuestion + 1 === quiz.length) {
      setTimeout(() => {
        setShowFinalScreen(true);
      }, 2000);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {!showFinalScreen ? (
        <div className="w-1/2 bg-white text-black rounded-md">
          <div className="text-2xl font-bold border-b border-gray-300 p-4">{type}</div>
          <div className="text-3xl font-bold p-4">
            {currentQuestion + 1}. {title}
          </div>
          <div>
            {quizQuestions.map((item, index) => {
              return (
                <QuizQuestion
                  question={item}
                  correct={correctQuestion}
                  index={index}
                  wasClicked={wasClicked}
                  checkQuestion={() => checkQuestion(index)}
                  showFinal={showFinal}
                  key={index}
                />
              );
            })}
          </div>
          <div className="p-4 mt-8 border-t border-gray-300 text-center">
            {currentQuestion + 1} de {quiz.length} pergunta{quiz.length === 1 ? '' : 's'}
          </div>
        </div>
      ) : (
        <FinalScreen accertsAndErrors={accertsAndErrors} currentQuestion={clicks} />
      )}
    </div>
  );
};
