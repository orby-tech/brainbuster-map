import { HTMLTopic } from "./html/html";

import { JavaScriptTopic } from "./javascript/javascript";
import { CSSTopic } from "./css/css";
import { ResponsiceDesignTopic } from "./responsice-design/responsice-design";

export const AccessibilityTopic = {
  title: "Accessibility",
  children: [
    {
      title: "WCAG guidelines and principles",
      children: [],
      questions: [
        {
          question: "What is the purpose of the WCAG?",
          answers: [
            "To make web content more accessible to people with disabilities",
            "To provide guidelines for web design aesthetics",
            "To promote internet censorship",
            "To ensure web content is compliant with government regulations",
          ],
          right_answer:
            "To make web content more accessible to people with disabilities",
          recommendations: [
            "Learn more about the WCAG and how to implement its guidelines",
          ],
        },
        {
          question: "What are the four principles that guide the WCAG?",
          answers: [
            "Perceivable, operable, understandable, and reliable",
            "Intuitive, interactive, attractive, and responsive",
            "Informative, engaging, social, and accessible",
            "Simple, clean, modern, and flexible",
          ],
          right_answer: "Perceivable, operable, understandable, and reliable",
          recommendations: [
            "Read more about each principle to understand how to apply them",
          ],
        },
        {
          question:
            "Which principle of the WCAG focuses on making web content clear and easy to understand?",
          answers: ["Perceivable", "Operable", "Understandable", "Robust"],
          right_answer: "Understandable",
          recommendations: [
            "Consider using plain language and providing clear instructions",
          ],
        },
        {
          question:
            "Which principle of the WCAG focuses on making web content navigable for all users?",
          answers: ["Perceivable", "Operable", "Understandable", "Robust"],
          right_answer: "Operable",
          recommendations: [
            "Ensure keyboard accessibility and provide alternative navigation options",
          ],
        },
        {
          question:
            "What is the goal of the perceivable principle of the WCAG?",
          answers: [
            "To ensure that web content can be perceived by all users",
            "To make web content more visually appealing",
            "To improve the speed and performance of web content",
            "To ensure web content is accessible only to certain users",
          ],
          right_answer:
            "To ensure that web content can be perceived by all users",
          recommendations: [
            "Consider using descriptive text alternatives for images and captions for videos",
          ],
        },
      ],
    },
    {
      title: "ARIA attributes and roles",
      children: [],
      questions: [],
    },
    {
      title: "Keyboard accessibility",
      children: [],
      questions: [],
    },
    {
      title: "Screen reader compatibility",
      children: [],
      questions: [],
    },
    {
      title: "Color contrast and text readability",
      children: [],
      questions: [],
    },
    {
      title: "Accessibility testing and validation",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const CrossBrowserCompatibilityTopic = {
  title: "Cross-Browser Compatibility",
  children: [
    {
      title: "Browser differences and compatibility issues",
      children: [],
      questions: [],
    },
    {
      title: "Polyfills and fallbacks",
      children: [],
      questions: [],
    },
    {
      title: "Vendor prefixes and feature detection",
      children: [],
      questions: [],
    },
    {
      title: "Testing and debugging cross-browser compatibility",
      children: [],
      questions: [],
    },
    {
      title: "Browser support tables and compatibility resources",
      children: [],
      questions: [],
    },
    {
      title: "Progressive enhancement and graceful degradation",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const WebPerformanceOptimizationTopic = {
  title: "Web Performance Optimization",
  children: [
    {
      title: "Page speed and loading times",
      children: [],
      questions: [],
    },
    {
      title: "Caching and browser storage",
      children: [],
      questions: [],
    },
    {
      title: "Image and asset optimization",
      children: [],
      questions: [],
    },
    {
      title: "Code optimization and minification",
      children: [],
      questions: [],
    },
    {
      title: "Content delivery networks (CDNs)",
      children: [],
      questions: [],
    },
    {
      title: "Performance testing and monitoring",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const WebSecurityTopic = {
  title: "Web Security",
  children: [
    {
      title: "SSL/TLS and HTTPS",
      children: [],
      questions: [],
    },
    {
      title: "Cross-site scripting (XSS) and injection attacks",
      children: [],
      questions: [],
    },
    {
      title: "Password security and hashing",
      children: [],
      questions: [],
    },
    {
      title: "CORS and CSRF protection",
      children: [],
      questions: [],
    },
    {
      title: "Content Security Policy (CSP)",
      children: [],
      questions: [],
    },
    {
      title: "Security testing and auditing",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const UXTopic = {
  title: "User Experience (UX)",
  children: [
    {
      title: "User research and personas",
      children: [],
      questions: [],
    },
    {
      title: "Information architecture and site mapping",
      children: [],
      questions: [],
    },
    {
      title: "Usability testing and feedback",
      children: [],
      questions: [],
    },
    {
      title: "Interaction design and user flows",
      children: [],
      questions: [],
    },
    {
      title: "UI design and visual hierarchy",
      children: [],
      questions: [],
    },
    {
      title: "Design patterns and best practices",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const SinglePageApplications = {
  title: "Single-page Applications (SPAs)",
  children: [
    {
      title: "JavaScript frameworks and libraries (e.g. React, Angular, Vue)",
      children: [],
      questions: [],
    },
    {
      title: "Routing and state management",
      children: [],
      questions: [],
    },
    {
      title: "API integration and data binding",
      children: [],
      questions: [],
    },
    {
      title: "SEO considerations for SPAs",
      children: [],
      questions: [],
    },
    {
      title: "Progressive enhancement in SPAs",
      children: [],
      questions: [],
    },
    {
      title: "Testing and debugging SPAs",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const ProgressiveWebAppstopic = {
  title: "Progressive Web Apps (PWAs)",
  children: [
    {
      title: "Service workers and offline support",
      children: [],
      questions: [],
    },
    {
      title: "Web app manifest and installation prompts",
      children: [],
      questions: [],
    },
    {
      title: "Push notifications and background sync",
      children: [],
      questions: [],
    },
    {
      title: "Accessibility and UX considerations for PWAs",
      children: [],
      questions: [],
    },
    {
      title: "PWA tools and resources",
      children: [],
      questions: [],
    },
    {
      title: "Testing and debugging PWAs",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const WebComponentsTopic = {
  title: "Web Components",
  children: [
    {
      title: "Custom elements and shadow DOM",
      children: [],
      questions: [],
    },
    {
      title: "Templates and slots",
      children: [],
      questions: [],
    },
    {
      title: "Inter-component communication",
      children: [],
      questions: [],
    },
    {
      title: "Styling and theming",
      children: [],
      questions: [],
    },
    {
      title: "Compatibility and polyfills for Web Components",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const BrowserAPIsTopic = {
  title: "Browser APIs",
  children: [
    {
      title: "Document Object Model (DOM)",
      children: [],
      questions: [],
    },
    {
      title: "Web Storage",
      children: [],
      questions: [],
    },
    {
      title: "Web Workers and multi-threading",
      children: [],
      questions: [],
    },
    {
      title: "Geolocation and mapping APIs",
      children: [],
      questions: [],
    },
    {
      title: "Audio and video APIs",
      children: [],
      questions: [],
    },
    {
      title: "Canvas and WebGL APIs",
      children: [],
      questions: [],
    },
  ],
  questions: [],
};

export const FrontendTopic = {
  title: "Frontend",
  children: [
    HTMLTopic,
    CSSTopic,
    JavaScriptTopic,
    ResponsiceDesignTopic,
    AccessibilityTopic,
    CrossBrowserCompatibilityTopic,
    WebPerformanceOptimizationTopic,
    WebSecurityTopic,
    UXTopic,
    SinglePageApplications,
    ProgressiveWebAppstopic,
    WebComponentsTopic,
    BrowserAPIsTopic,
  ],
  questions: [],
};
