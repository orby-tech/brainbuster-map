import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionItem, Topic } from '@common/graph/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  topics$ = new BehaviorSubject<Topic[]>([]);

  questions$ = new BehaviorSubject<{ question: string }[]>([]);

  constructor(private httpClient: HttpClient) {
    this.load();
  }

  async load() {
    this.httpClient
      .get<QuestionItem[]>('http://localhost:2000/api/questions')
      .subscribe((x) => this.questions$.next(x));

    this.httpClient
      .get<Topic[]>('http://localhost:2000/api/topics')
      .subscribe((x) => this.topics$.next(x));
  }

  getQuestion(title: string): Observable<QuestionItem> {
    return this.httpClient.post<QuestionItem>(
      'http://localhost:2000/api/get-question',
      {
        title,
      }
    );
  }

  checkAnswer(answer: string, questionTitle: string) {
    return this.httpClient.post<{ recomendations: string } | null>(
      'http://localhost:2000/api/check-answer',
      {
        answer,
        questionTitle,
      }
    );
  }

  getRecomendations(title: string) {
    return this.httpClient.post<QuestionItem['recommendations']>(
      'http://localhost:2000/api/get-recommendations',
      {
        title,
        userId: '1',
      }
    );
  }

  getTopUserByTopic(title: string) {
    return this.httpClient.post<
      {
        userName: string;
        score: number;
      }[]
    >('http://localhost:2000/api/get-top-user-by-topic', {
      title,
    });
  }
}
