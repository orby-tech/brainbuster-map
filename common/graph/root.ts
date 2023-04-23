import { TopicGraphItem } from "./types";
import { UXTopic } from "./web-development/frontend/frontend";
import { JavaScriptTopic } from "./web-development/frontend/javascript/javascript";
import { WebDevelopmentTopic } from "./web-development/web-development";

export const DevelopmentTopic = {
  title: "Software Development",
  children: [
    WebDevelopmentTopic,
    { title: "Agile Development", questions: [], children: [] },
    {
      title: "Algorithms and Data Structures",
      questions: [],
      children: [],
    },
    {
      title: "Cloud Computing",
      questions: [],
      children: [],
    },
    {
      title: "Computer Science Fundamentals",
      questions: [],
      children: [],
    },
    {
      title: "Continuous Integration and Continuous Delivery (CI/CD)",
      questions: [],
      children: [],
    },
    {
      title: "Databases",
      questions: [],
      children: [
        {
          title: "Database Development",
          questions: [],
          children: [],
        },
      ],
    },
    {
      title: "DevOps",
      questions: [],
      children: [],
    },
    {
      title: "Distributed Systems",
      questions: [],
      children: [],
    },
    {
      title: "Game Development",
      questions: [],
      children: [],
    },
    {
      title: "Machine Learning and Artificial Intelligence",
      questions: [],
      children: [],
    },

    {
      title: "Operating Systems Native Development",
      questions: [],
      children: [
        {
          title: "Mobile Development",
          questions: [],
          children: [],
        },
      ],
    },
    {
      title: "Programming Languages",
      questions: [],
      children: [JavaScriptTopic],
    },

    {
      title: "Development Patterns",
      questions: [],
      children: [
        {
          title: "Object-Oriented Programming (OOP)",
          questions: [],
          children: [],
        },
        {
          title: "Software Architecture",
          questions: [],
          children: [],
        },
        {
          title: "Software Design Patterns",
          questions: [],
          children: [],
        },
        {
          title: "Test-Driven Development (TDD)",
          questions: [],
          children: [],
        },
      ],
    },

    UXTopic,
  ],
  questions: [],
};

export const TOPIC_GRAPH: TopicGraphItem = {
  title: "root",
  children: [DevelopmentTopic],
  questions: [],
};
