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
      questions: [
        {
          question: "What is meant by browser compatibility?",
          answers: [
            "Ensuring that a website functions properly across different web browsers",
            "Ensuring that a website looks identical across different web browsers",
            "Limiting a website's functionality to a single web browser",
            "Limiting a website's accessibility to certain users",
          ],
          right_answer:
            "Ensuring that a website functions properly across different web browsers",
          recommendations: [
            "Test your website on different browsers to ensure compatibility",
          ],
        },
        {
          question: "What is a common cause of browser compatibility issues?",
          answers: [
            "Differences in how web browsers interpret HTML, CSS, and JavaScript",
            "Lack of website security measures",
            "Inconsistent internet speeds",
            "Outdated web browsers",
          ],
          right_answer:
            "Differences in how web browsers interpret HTML, CSS, and JavaScript",
          recommendations: [
            "Use web standards and best practices to reduce compatibility issues",
          ],
        },
        {
          question:
            "What is the best approach to addressing browser compatibility issues?",
          answers: [
            "Develop and test websites with a focus on web standards and best practices",
            "Limit website functionality to the most popular web browsers",
            "Ignore browser compatibility issues and focus on aesthetics",
            "Use browser-specific features and properties",
          ],
          right_answer:
            "Develop and test websites with a focus on web standards and best practices",
          recommendations: [
            "Use tools and resources to identify and resolve compatibility issues",
          ],
        },
        {
          question:
            "What is the term used to describe when a website looks different in different web browsers?",
          answers: [
            "Browser inconsistency",
            "Cross-browser compatibility",
            "Aesthetics variance",
            "Browser discrepancy",
          ],
          right_answer: "Browser inconsistency",
          recommendations: [
            "Use CSS resets and frameworks to standardize website appearance across different browsers",
          ],
        },
        {
          question: "What can be used to ensure browser compatibility?",
          answers: [
            "Web standards, best practices, and testing",
            "Proprietary browser-specific features",
            "Plugins and extensions",
            "Outdated web development techniques",
          ],
          right_answer: "Web standards, best practices, and testing",
          recommendations: [
            "Regularly check for updates and changes to web standards to stay up-to-date",
          ],
        },
      ],
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
      questions: [
        {
          question: "Why is page speed important?",
          answers: [
            "It affects user experience and engagement",
            "It affects website security",
            "It affects website aesthetics",
            "It affects website functionality",
          ],
          right_answer: "It affects user experience and engagement",
          recommendations: [
            "Optimize images and use a content delivery network (CDN) to improve page speed",
          ],
        },
        {
          question: "What is the recommended page load time?",
          answers: [
            "Under 2 seconds",
            "Under 5 seconds",
            "Under 10 seconds",
            "Under 15 seconds",
          ],
          right_answer: "Under 2 seconds",
          recommendations: [
            "Minimize HTTP requests and use browser caching to reduce page load time",
          ],
        },
        {
          question:
            "What is the impact of slow page speed on website conversion rate?",
          answers: [
            "It decreases website conversion rate",
            "It increases website conversion rate",
            "It has no impact on website conversion rate",
            "It decreases website traffic",
          ],
          right_answer: "It decreases website conversion rate",
          recommendations: [
            "Regularly monitor website performance and optimize website elements to improve page speed",
          ],
        },
        {
          question: "What is the recommended size for website images?",
          answers: [
            "Less than 100KB",
            "Less than 500KB",
            "Less than 1MB",
            "Less than 5MB",
          ],
          right_answer: "Less than 100KB",
          recommendations: [
            "Use compression techniques and optimize images for the web to reduce image size",
          ],
        },
        {
          question:
            "What is the recommended number of fonts to use on a website?",
          answers: [
            "Less than 3",
            "Less than 5",
            "Less than 10",
            "There is no limit",
          ],
          right_answer: "Less than 3",
          recommendations: [
            "Use system fonts and web-safe fonts to reduce the number of HTTP requests and improve page speed",
          ],
        },
      ],
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
      questions: [
        {
          question: "What is SSL/TLS?",
          answers: [
            "A protocol that ensures secure communication between servers and clients",
            "A protocol that ensures fast website loading",
            "A protocol that ensures website accessibility",
            "A protocol that ensures website aesthetics",
          ],
          right_answer:
            "A protocol that ensures secure communication between servers and clients",
          recommendations: [
            "Always use HTTPS instead of HTTP for improved security",
          ],
        },
        {
          question: "What is HTTPS?",
          answers: [
            "A secure version of HTTP",
            "A new web programming language",
            "A type of web hosting",
            "An email protocol",
          ],
          right_answer: "A secure version of HTTP",
          recommendations: [
            "Install and use SSL/TLS certificates on your website to enable HTTPS",
          ],
        },
        {
          question: "What is an SSL/TLS certificate?",
          answers: [
            "A digital certificate that authenticates the identity of a website and enables secure communication",
            "A file that contains website images and videos",
            "A tool for website development",
            "A type of website hosting",
          ],
          right_answer:
            "A digital certificate that authenticates the identity of a website and enables secure communication",
          recommendations: [
            "Regularly update SSL/TLS certificates and use strong encryption to enhance website security",
          ],
        },
        {
          question: "What is mixed content?",
          answers: [
            "A security vulnerability that occurs when a website serves both HTTP and HTTPS content",
            "A website design principle",
            "A type of website content",
            "A programming language",
          ],
          right_answer:
            "A security vulnerability that occurs when a website serves both HTTP and HTTPS content",
          recommendations: [
            "Avoid serving mixed content on your website to prevent security vulnerabilities",
          ],
        },
        {
          question: "What is HSTS?",
          answers: [
            "A security policy that enforces the use of HTTPS on a website",
            "A programming language",
            "A type of web hosting",
            "A website design principle",
          ],
          right_answer:
            "A security policy that enforces the use of HTTPS on a website",
          recommendations: [
            "Implement HSTS on your website to improve security and prevent SSL/TLS stripping attacks",
          ],
        },
      ],
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
  questions: [
    {
      question: "What does UX stand for?",
      answers: [
        "User Experience",
        "User Expressions",
        "User Exclusions",
        "User Expectations",
      ],
      right_answer: "User Experience",
      recommendations: [
        "Always keep the user in mind when designing digital products and services",
      ],
    },
    {
      question: "What is a user persona?",
      answers: [
        "A fictional representation of a user group with shared characteristics and goals",
        "A type of website layout",
        "A website design principle",
        "A website hosting service",
      ],
      right_answer:
        "A fictional representation of a user group with shared characteristics and goals",
      recommendations: [
        "Create user personas to better understand and design for your target audience",
      ],
    },
    {
      question: "What is usability testing?",
      answers: [
        "A method of testing how easy and efficient a digital product or service is to use",
        "A method of testing website speed",
        "A method of testing website security",
        "A method of testing website aesthetics",
      ],
      right_answer:
        "A method of testing how easy and efficient a digital product or service is to use",
      recommendations: [
        "Conduct usability testing regularly to identify and address usability issues in your digital products and services",
      ],
    },
    {
      question: "What is a wireframe?",
      answers: [
        "A basic visual guide that represents the layout and structure of a digital product or service",
        "A type of website content",
        "A website design principle",
        "A website hosting service",
      ],
      right_answer:
        "A basic visual guide that represents the layout and structure of a digital product or service",
      recommendations: [
        "Create wireframes to plan and visualize the structure and content of your digital products and services",
      ],
    },
    {
      question: "What is the difference between UI and UX?",
      answers: [
        "UI focuses on the visual and interactive design of digital products and services, while UX focuses on the overall user experience",
        "UI focuses on website speed, while UX focuses on website security",
        "UI focuses on website aesthetics, while UX focuses on website accessibility",
        "UI focuses on website content, while UX focuses on website structure",
      ],
      right_answer:
        "UI focuses on the visual and interactive design of digital products and services, while UX focuses on the overall user experience",
      recommendations: [
        "Always consider both UI and UX when designing digital products and services for optimal user experience",
      ],
    },
  ],
};

export const SinglePageApplications = {
  title: "Single-page Applications (SPAs)",
  children: [
    {
      title: "JavaScript frameworks and libraries (e.g. React, Angular, Vue)",
      children: [],
      questions: [
        {
          question: "What does UX stand for?",
          answers: [
            "User Experience",
            "User Expressions",
            "User Exclusions",
            "User Expectations",
          ],
          right_answer: "User Experience",
          recommendations: [
            "Always keep the user in mind when designing digital products and services",
          ],
        },
        {
          question: "What is a user persona?",
          answers: [
            "A fictional representation of a user group with shared characteristics and goals",
            "A type of website layout",
            "A website design principle",
            "A website hosting service",
          ],
          right_answer:
            "A fictional representation of a user group with shared characteristics and goals",
          recommendations: [
            "Create user personas to better understand and design for your target audience",
          ],
        },
        {
          question: "What is usability testing?",
          answers: [
            "A method of testing how easy and efficient a digital product or service is to use",
            "A method of testing website speed",
            "A method of testing website security",
            "A method of testing website aesthetics",
          ],
          right_answer:
            "A method of testing how easy and efficient a digital product or service is to use",
          recommendations: [
            "Conduct usability testing regularly to identify and address usability issues in your digital products and services",
          ],
        },
        {
          question: "What is a wireframe?",
          answers: [
            "A basic visual guide that represents the layout and structure of a digital product or service",
            "A type of website content",
            "A website design principle",
            "A website hosting service",
          ],
          right_answer:
            "A basic visual guide that represents the layout and structure of a digital product or service",
          recommendations: [
            "Create wireframes to plan and visualize the structure and content of your digital products and services",
          ],
        },
        {
          question: "What is the difference between UI and UX?",
          answers: [
            "UI focuses on the visual and interactive design of digital products and services, while UX focuses on the overall user experience",
            "UI focuses on website speed, while UX focuses on website security",
            "UI focuses on website aesthetics, while UX focuses on website accessibility",
            "UI focuses on website content, while UX focuses on website structure",
          ],
          right_answer:
            "UI focuses on the visual and interactive design of digital products and services, while UX focuses on the overall user experience",
          recommendations: [
            "Always consider both UI and UX when designing digital products and services for optimal user experience",
          ],
        },
      ],
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
      questions: [
        {
          question: "What are service workers?",
          answers: [
            "JavaScript files that run in the background of web pages to provide additional functionality",
            "A type of web browser",
            "A programming language",
            "A web development tool",
          ],
          right_answer:
            "JavaScript files that run in the background of web pages to provide additional functionality",
          recommendations: [
            "Consider using service workers to improve website performance and offline support",
          ],
        },
        {
          question: "What is offline support?",
          answers: [
            "The ability of a website to function without an internet connection",
            "The ability of a website to prevent malicious attacks",
            "The ability of a website to load faster",
            "The ability of a website to support multiple languages",
          ],
          right_answer:
            "The ability of a website to function without an internet connection",
          recommendations: [
            "Provide offline support to improve user experience and accessibility, especially in areas with poor internet connectivity",
          ],
        },
        {
          question: "What is a cache?",
          answers: [
            "A temporary storage location for web content",
            "A type of JavaScript function",
            "A type of web server",
            "A type of web page layout",
          ],
          right_answer: "A temporary storage location for web content",
          recommendations: [
            "Use caching to speed up website loading times and reduce server load",
          ],
        },
        {
          question: "What is the purpose of the Cache API?",
          answers: [
            "To give developers control over the caching of web content",
            "To block access to certain websites",
            "To speed up web browsing",
            "To provide website security",
          ],
          right_answer:
            "To give developers control over the caching of web content",
          recommendations: [
            "Use the Cache API to control caching behavior and improve website performance",
          ],
        },
        {
          question:
            "What is the difference between online and offline events in service workers?",
          answers: [
            "Online events are triggered when the device has internet connectivity, while offline events are triggered when the device is offline",
            "Online events are triggered when the device is offline, while offline events are triggered when the device has internet connectivity",
            "Online events are triggered by user actions, while offline events are triggered automatically",
            "There is no difference between online and offline events in service workers",
          ],
          right_answer:
            "Online events are triggered when the device has internet connectivity, while offline events are triggered when the device is offline",
          recommendations: [
            "Understand the online and offline events in service workers to build robust offline support for your website",
          ],
        },
      ],
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
  questions: [
    {
      question: "What are service workers?",
      answers: [
        "JavaScript files that run in the background of web pages to provide additional functionality",
        "A type of web browser",
        "A programming language",
        "A web development tool",
      ],
      right_answer:
        "JavaScript files that run in the background of web pages to provide additional functionality",
      recommendations: [
        "Consider using service workers to improve website performance and offline support",
      ],
    },
    {
      question: "What is offline support?",
      answers: [
        "The ability of a website to function without an internet connection",
        "The ability of a website to prevent malicious attacks",
        "The ability of a website to load faster",
        "The ability of a website to support multiple languages",
      ],
      right_answer:
        "The ability of a website to function without an internet connection",
      recommendations: [
        "Provide offline support to improve user experience and accessibility, especially in areas with poor internet connectivity",
      ],
    },
    {
      question: "What is a cache?",
      answers: [
        "A temporary storage location for web content",
        "A type of JavaScript function",
        "A type of web server",
        "A type of web page layout",
      ],
      right_answer: "A temporary storage location for web content",
      recommendations: [
        "Use caching to speed up website loading times and reduce server load",
      ],
    },
    {
      question: "What is the purpose of the Cache API?",
      answers: [
        "To give developers control over the caching of web content",
        "To block access to certain websites",
        "To speed up web browsing",
        "To provide website security",
      ],
      right_answer:
        "To give developers control over the caching of web content",
      recommendations: [
        "Use the Cache API to control caching behavior and improve website performance",
      ],
    },
    {
      question:
        "What is the difference between online and offline events in service workers?",
      answers: [
        "Online events are triggered when the device has internet connectivity, while offline events are triggered when the device is offline",
        "Online events are triggered when the device is offline, while offline events are triggered when the device has internet connectivity",
        "Online events are triggered by user actions, while offline events are triggered automatically",
        "There is no difference between online and offline events in service workers",
      ],
      right_answer:
        "Online events are triggered when the device has internet connectivity, while offline events are triggered when the device is offline",
      recommendations: [
        "Understand the online and offline events in service workers to build robust offline support for your website",
      ],
    },
  ],
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
    WebComponentsTopic,
    ProgressiveWebAppstopic,
  ],
  questions: [],
};

export const FrontendTopic = {
  title: "Frontend",
  children: [
    {
      title: "Design and layout",
      children: [
        HTMLTopic,
        CSSTopic,
        ResponsiceDesignTopic,
        UXTopic,
        AccessibilityTopic,
      ],
      questions: [],
    },
    JavaScriptTopic,
    CrossBrowserCompatibilityTopic,
    WebPerformanceOptimizationTopic,
    WebSecurityTopic,
    SinglePageApplications,
    BrowserAPIsTopic,
  ],
  questions: [],
};
