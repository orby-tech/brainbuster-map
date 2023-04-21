import { QuestionItem } from "@common/graph/types";

export const HTMLQuestions: QuestionItem[] = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Hypermedia Transfer Language",
      "Hyperlink Markup Language",
      "Hypermedia Markup Language",
    ],
    right_answer: "Hypertext Markup Language",
    recommendations: [
      "Review the basics of HTML",
      "Study the HTML tags and their functions",
    ],
  },
  {
    question:
      "Which of the following tags is used to create a hyperlink in HTML?",
    answers: ["<div>", "<p>", "<a>", "<h1>"],
    right_answer: "<a>",
    recommendations: [
      "Learn the basic syntax of HTML tags",
      "Review the purpose and usage of hyperlink tags",
    ],
  },
  {
    question: "What is the purpose of the alt attribute in the <img> tag?",
    answers: [
      "It specifies the width of the image.",
      "It specifies the height of the image.",
      "It provides a description of the image for screen readers and other assistive technologies.",
      "It specifies the URL of the image.",
    ],
    right_answer:
      "It provides a description of the image for screen readers and other assistive technologies.",
    recommendations: [
      "Learn the purpose of the <img> tag and its attributes",
      "Understand the importance of web accessibility and how it relates to the alt attribute",
    ],
  },
  {
    question: "Which of the following tags is used to create a list in HTML?",
    answers: ["<list>", "<li>", "<ul>", "<ol>"],
    right_answer: "<ul>",
    recommendations: [
      "Learn the basic syntax of HTML tags",
      "Understand the different types of lists in HTML and their usage",
    ],
  },
  {
    question: "Which tag is used to define a table in HTML?",
    answers: ["<table>", "<tr>", "<td>", "<th>"],
    right_answer: "<table>",
    recommendations: [
      "Learn the basic syntax of HTML tags",
      "Understand the structure and purpose of HTML tables",
    ],
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    answers: [
      "It defines the main content of the web page.",
      "It defines the header of the web page.",
      "It contains metadata about the web page, such as the title and links to stylesheets and scripts.",
      "It defines a section of the web page that is not visible to the user.",
    ],
    right_answer:
      "It contains metadata about the web page, such as the title and links to stylesheets and scripts.",
    recommendations: [
      "Understand the purpose of the <head> tag",
      "Learn how to include metadata in the <head> section of an HTML document",
    ],
  },
  {
    question:
      "Which of the following tags is used to create a line break in HTML?",
    answers: ["<br>", "<hr>", "<p>", "<div>"],
    right_answer: "<br>",
    recommendations: [
      "Learn the basic syntax of HTML tags",
      "Understand the purpose of line breaks in HTML",
    ],
  },
];
