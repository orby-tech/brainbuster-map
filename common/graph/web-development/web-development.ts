import { QuestionItem, TopicGraphItem } from "./../types";
import { FrontendTopic, WebSecurityTopic } from "./frontend/frontend";
import { JavaScriptTopic } from "./frontend/javascript/javascript";

export const WebDevelopmentTopic = {
  title: "Web Development",
  children: [
    FrontendTopic,
    {
      title: "Backend Development",
      questions: [],
      children: [JavaScriptTopic],
    },

 
    {
      title: "Search Engine Optimization (SEO)",
      questions: [],
      children: [],
    },
    {
      title: "Web Performance Optimization (WPO)",
      questions: [],
      children: [],
    },
    {
      title: "Cross-Browser Compatibility",
      questions: [],
      children: [],
    },
    {
      title: "Web Accessibility (WCAG)",
      questions: [],
      children: [],
    },
    WebSecurityTopic,
    {
      title: "Content Management Systems (CMS)",
      questions: [],
      children: [],
    },
    {
      title: "Web Analytics",
      questions: [],
      children: [],
    },
    {
      title: "Web Hosting and Deployment",
      questions: [],
      children: [],
    },
    {
      title: "Web Standards and Best Practices",
      questions: [],
      children: [],
    },
  ],
  questions: [],
};
