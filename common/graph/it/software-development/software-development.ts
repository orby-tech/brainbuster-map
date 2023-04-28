import { ApplicationDevelopmentTopic } from "./application-development/application-development";
import {
  DatabasesTopic,
  ComputerScienceTopic,
  CloudComputingTopic,
  DistributedSystems,
} from "./computer-science/computer-science";
import { UXTopic } from "./web-development/frontend/frontend";
import { JavaScriptTopic } from "./web-development/frontend/javascript/javascript";

export const SoftwareDevelopmentTopic = {
  title: "Software Development",
  children: [
    { title: "Agile Development", questions: [], children: [] },

    ComputerScienceTopic,

    {
      title: "DevOps",
      questions: [],
      children: [
        {
          title: "Continuous Integration and Continuous Delivery (CI/CD)",
          questions: [],
          children: [],
        },
        CloudComputingTopic,
        DistributedSystems,
        DatabasesTopic,
      ],
    },

    ApplicationDevelopmentTopic,

    {
      title: "Programming Languages",
      questions: [],
      children: [JavaScriptTopic],
    },

    UXTopic,
  ],
  questions: [],
};
