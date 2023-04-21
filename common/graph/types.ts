export type SelectQuestion = {
  question: string;
  answers: string[];
  right_answer: string;
  recommendations: string[];
};

export type QuestionItem = SelectQuestion;

export type TopicGraphItem = {
  title: string;
  children: TopicGraphItem[];
  questions: QuestionItem[];
};

export type Topic = {
    title: string;
    children: string[];
    questions: string[];
  };