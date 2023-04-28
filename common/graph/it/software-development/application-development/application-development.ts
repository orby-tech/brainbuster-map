import { DatabasesTopic } from "../computer-science/computer-science";
import { WebDevelopmentTopic } from "../web-development/web-development";

export const ApplicationDevelopmentTopic = {
  title: "Application Development",
  questions: [],
  children: [
    WebDevelopmentTopic,

    {
      title: "Game Development",
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
    DatabasesTopic,
  ],
};
