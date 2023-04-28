import { SoftwareDevelopmentTopic } from "./software-development/software-development";

export const ITTopic = {
  title: "IT",
  children: [
    SoftwareDevelopmentTopic,
    {
      title: "IT business",
      children: [
        { title: "IT consulting and outsourcing", children: [], questions: [] },
        { title: "E-commerce and online sales", children: [], questions: [] },
        {
          title: "Digital marketing and online advertising",
          children: [],
          questions: [],
        },
        { title: "Business process automation", children: [], questions: [] },
      ],
      questions: [],
    },
    { title: "IT education and training", children: [], questions: [] },
    {
      title: "Embedded",
      children: [
        {
          title: "Internet of Things (IoT) and smart devices",
          children: [],
          questions: [],
        },
        { title: "Robotics and automation", children: [], questions: [] },
        { title: "Virtual and augmented reality", children: [], questions: [] },
      ],
      questions: [],
    },
    {
      title: "Multimedia and digital content creation",
      children: [
        {
          title: "Graphic design and digital art",
          children: [],
          questions: [],
        },
        { title: "Audio and video production", children: [], questions: [] },
      ],
      questions: [],
    },
    {
      title: "Hardware Development",
      children: [
        {
          title: "Computer hardware and peripherals",
          children: [],
          questions: [],
        },
      ],
      questions: [],
    },
  ],
  questions: [],
};
