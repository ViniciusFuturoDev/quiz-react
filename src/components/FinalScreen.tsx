import { quiz } from '@/data/quiz';
import { AccertsAndErrors } from './Quiz';

type Props = {
  accertsAndErrors: AccertsAndErrors[];
  currentQuestion: number[];
};

export const FinalScreen = ({ accertsAndErrors, currentQuestion }: Props) => {
  return (
    <div className="w-screen fixed inset-0 flex justify-center items-center text-black">
      <div className="flex flex-col gap-3 bg-white w-2/5 pb-6 rounded-3xl shadow-xl">
        <div>
          <p className="text-2xl font-bold border-b border-gray-300 py-4 text-center">Quiz concluído</p>
          <p className="text-3xl pt-4 text-center">Acertos: {accertsAndErrors[quiz.length].accerts}</p>
          <p className="text-3xl text-center">Erros: {accertsAndErrors[quiz.length].errors}</p>

          {quiz.map((item, index) => (
            <div className="ml-4 my-4" key={index}>
              <p className="font-bold">
                {index + 1}. {item.title}
              </p>
              <p>
                ({accertsAndErrors[index].itemIsCorrect}) - {item.quizQuestions[currentQuestion[index]]}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 text-center">
          <button className="cursor-pointer text-2xl bg-blue-800 text-white w-48 mt-4 rounded-md" onClick={() => window.location.reload()}>
            Reiniciar Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
