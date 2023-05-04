import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionItem, Topic, TopicGraphItem } from '@common/graph/types';
import { TOPIC_GRAPH } from '@common/graph/root';
import {
  ApiService,
  getAllQuestionsByTopicTitle,
  getAllTopics,
  getQuestionsFromGraph,
} from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

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
    {
      answer,
      questionTitle,
      userName,
    }: {
      answer: string;
      questionTitle: string;
      userName: string;
    },
  ): { recomendations: string[] } | null {
    if (!userName) {
      throw new Error('userName is required');
    }
    return this.apiService.checkAnswer({ answer, questionTitle, userName });
  }

  @Post('get-recommendations')
  getRecomendations(
    @Body() { title, userId }: { title: string; userId: string },
  ): QuestionItem['recommendations'] {
    return this.apiService.getRecommendations(title, userId);
  }

  @Post('get-top-user-by-topic')
  getTopUserByTopic(@Body() { title }: { title: string }): {
    userName: string;
    score: number;
  }[] {
    const allTopics = getAllTopics(TOPIC_GRAPH);
    const allQuestions = getQuestionsFromGraph(TOPIC_GRAPH);
    const questions = getAllQuestionsByTopicTitle(
      title,
      allTopics,
      allQuestions,
    );
    return this.apiService.getTopUserByListQuestionIds(
      questions.map((q) => q.question),
    );
  }

  @Post('get-info-about-user')
  getInfoAboutUser(
    @Body() { userId, topic }: { userId: string; topic: string },
  ): { userName: string; score: number; recomendations: string[] } {
    return this.apiService.getInfoAboutUser(userId, topic);
  }
}
