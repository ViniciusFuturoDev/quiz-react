import { Quiz } from '@/types/Quiz';

export const quiz: Quiz[] = [
  {
    type: 'Quiz de jogos',
    title: 'Qual é o meu jogo favorito?',
    quizQuestions: ['Fortnite', 'Valorant', 'Minecraft', 'Roblox'],
    correctQuestion: 2,
  },
  {
    type: 'Quiz de anime',
    title: 'Qual é o anime com a melhor animacão?',
    quizQuestions: ['Sousou no Frieren', 'Kimetsu no Yaiba', 'Sword Art Online', 'Fate'],
    correctQuestion: 3,
  },
  {
    type: 'Quiz de computador',
    title: 'Qual é o sistema operacional mais utilizado?',
    quizQuestions: ['Windows', 'Linux', 'Mac'],
    correctQuestion: 0,
  },
  {
    type: 'Quiz de culinaria',
    title: 'Qual é a comida mais gostosa?',
    quizQuestions: ['Cachorro-Quente', 'Pizza', 'Hamburguer', 'Strogonofe'],
    correctQuestion: 3,
  },
];
