import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionItem, Topic, TopicGraphItem } from '@common/graph/types';
import { TOPIC_GRAPH } from '@common/graph/root';

const getQuestionsFromGraph = (graph: TopicGraphItem): QuestionItem[] => {
  return [
    ...graph.questions,
    ...graph.children.map((g) => getQuestionsFromGraph(g)).flat(),
  ];
};

const getAllTopics = (graph: TopicGraphItem): Topic[] => {
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

@Controller('api')
export class ApiController {
  @Get('questions')
  getQuestions() {
    return getQuestionsFromGraph(TOPIC_GRAPH);
  }

  @Get('topics')
  getTopics() {
    return getAllTopics(TOPIC_GRAPH);
  }

  @Post('get-question')
  getQuestion(@Body() { title }: { title: string }): QuestionItem {
    const allTopics = getAllTopics(TOPIC_GRAPH);
    const allQuestions = getQuestionsFromGraph(TOPIC_GRAPH);
    const questions = getAllQuestionsByTopicTitle(
      title,
      allTopics,
      allQuestions,
    );
    return questions[Math.floor(Math.random() * questions.length)];
  }

  @Post('check-answer')
  checkAnswer(
    @Body()
    { answer, questionTitle }: { answer: string; questionTitle: string },
  ): { recomendations: string[] } | null {
    const allTopics = getAllTopics(TOPIC_GRAPH);
    const allQuestions = getQuestionsFromGraph(TOPIC_GRAPH);
    const question = allQuestions.find((q) => q.question === questionTitle);

    return question.right_answer !== answer
      ? { recomendations: question.recommendations }
      : null;
  }

  @Post('get-recommendations')
  getRecomendations(
    @Body() { title, userId }: { title: string; userId: string },
  ): QuestionItem['recommendations'] {
    const allTopics = getAllTopics(TOPIC_GRAPH);
    const allQuestions = getQuestionsFromGraph(TOPIC_GRAPH);
    const questions = getAllQuestionsByTopicTitle(
      title,
      allTopics,
      allQuestions,
    );
    return questions[Math.floor(Math.random() * questions.length)]
      ?.recommendations;
  }
}
