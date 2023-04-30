import { Injectable } from '@nestjs/common';
import { QuestionItem, Topic, TopicGraphItem } from '@common/graph/types';
import { TOPIC_GRAPH } from '@common/graph/root';

export const getQuestionsFromGraph = (
  graph: TopicGraphItem,
): QuestionItem[] => {
  return [
    ...graph.questions,
    ...graph.children.map((g) => getQuestionsFromGraph(g)).flat(),
  ];
};

export const getAllTopics = (graph: TopicGraphItem): Topic[] => {
  if (!graph.questions.length) {
    console.warn(`${graph.title} : no questions`);
  }
  return [
    {
      title: graph.title,
      children: graph.children.map((c) => c.title),
      questions: graph.questions.map((c) => c.question),
    },
    ...graph.children.map((g) => getAllTopics(g)).flat(),
  ];
};

export const getAllQuestionsByTopicTitle = (
  title: string,
  topics: Topic[],
  questions: QuestionItem[],
): QuestionItem[] => {
  const topic = topics.find((t) => t.title === title);
  if (!topic) {
    return [];
  }
  return [
    ...(topic.questions
      .map((q) => questions.find((qu) => qu.question === q))
      .filter((x) => x) as QuestionItem[]),

    ...topic.children
      .map((c) => getAllQuestionsByTopicTitle(c, topics, questions))
      .flat(),
  ];
};

@Injectable()
export class ApiService {
  usersAnswers: {
    questionId: string;
    userId: string;
    isCorrect: boolean;
  }[] = [];

  constructor() {
    this.setAnswer('What does HTML stand for?', '1', true);
  }

  setAnswer(
    questionId: string,
    userId: string,
    isCorrect: boolean,
  ): { questionId: string; userId: string; isCorrect: boolean } {
    const answer = {
      questionId,
      userId,
      isCorrect,
    };
    this.usersAnswers.push(answer);
    return answer;
  }

  checkAnswer({
    answer,
    questionTitle,
    userName,
  }: {
    answer: string;
    questionTitle: string;
    userName: string;
  }): { recomendations: string[] } {
    const allTopics = getAllTopics(TOPIC_GRAPH);
    const allQuestions = getQuestionsFromGraph(TOPIC_GRAPH);
    const question = allQuestions.find((q) => q.question === questionTitle);
    const isCorrect = question.right_answer === answer;
    this.setAnswer(questionTitle, userName, isCorrect);
    return !isCorrect ? { recomendations: question.recommendations } : null;
  }

  getTopUserByListQuestionIds(questionIds: string[]): {
    userName: string;
    score: number;
  }[] {
    const userAnswers = this.usersAnswers.filter((ua) =>
      questionIds.includes(ua.questionId),
    );

    const userAnswersByQuestionId = userAnswers.reduce((acc, curr) => {
      if (!acc[curr.questionId]) {
        acc[curr.questionId] = [];
      }
      acc[curr.questionId].push(curr);
      return acc;
    }, {} as Record<string, typeof userAnswers>);
    const userAnswersByQuestionIdArray = Object.entries(
      userAnswersByQuestionId,
    ).map(([questionId, answers]) => {
      const correctAnswers = answers.filter((a) => a.isCorrect);
      console.log(correctAnswers);

      return {
        questionId,
        userId: answers[0].userId,
        correctAnswers: correctAnswers.length,
      };
    });
    const userAnswersByUserId = userAnswersByQuestionIdArray.reduce(
      (acc, curr) => {
        if (!acc[curr.userId]) {
          acc[curr.userId] = [];
        }
        acc[curr.userId].push(curr);
        return acc;
      },
      {} as Record<string, typeof userAnswersByQuestionIdArray>,
    );
    const userAnswersByUserIdArray = Object.entries(userAnswersByUserId).map(
      ([userId, answers]) => {
        const correctAnswers = answers.reduce((acc, curr) => {
          acc += curr.correctAnswers;
          return acc;
        }, 0);
        return {
          userId,
          correctAnswers,
        };
      },
    );
    const sortedUserAnswersByUserIdArray = userAnswersByUserIdArray.sort(
      (a, b) => b.correctAnswers - a.correctAnswers,
    );
    return sortedUserAnswersByUserIdArray.map((x) => ({
      userName: x.userId,
      score: x.correctAnswers,
    }));
  }
}
