import { TopicGraphItem } from "./types";
import { WebDevelopmentTopic } from "./web-development/web-development";

export const TOPIC_GRAPH: TopicGraphItem = {
  title: "root",
  children: [WebDevelopmentTopic],
  questions: [],
};
