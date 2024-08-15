export interface ProjectType {
  id: number;
  projectId: number;
  title: string;
  description: string;
  github: string;
  demo: string;
  imgURL: string;
  files: {
    type: number; //1: video , 2: image
    file: string;
  };
  type: string;
  body: string;
}
export const ProjectData: ProjectType[] = [
  {
    id: 1,
    projectId: 1,
    title: "Nexca",
    description:
      "Nexca is your go-to platform for creating powerful admin panels.",
    github: "https://github.com/homayunmmdy/Nexca",
    demo: "https://nexca.vercel.app/",
    imgURL: "https://i.imgur.com/vcf7Yka.png",
    files: {
      type: 3,
      file: "https://github.com/homayunmmdy/Nexca/releases",
    },
    type: "Admin Panel",
    body: "Nexca offers a robust admin panel for agencies and individuals, enabling seamless data management, content sharing, and audience engagement. Build your brand effortlessly with Nexca.",
  },
  {
    id: 2,
    projectId: 2,
    title: "Magnitify",
    description:
      "Magnitify Master AI, Wealth, and Self-Improvement to Unlock Your Superpowers",
    github: "https://github.com/homayunmmdy/Magnitify",
    demo: "https://magnitify.vercel.app/",
    imgURL: "https://i.imgur.com/jW06xk1.png",
    files: {
      type: 3,
      file: "https://magnitify.vercel.app/",
    },
    type: "Blog",
    body: "Magnitify offers cutting-edge articles on AI, self-improvement, business, and wealth. Empower yourself with knowledge and transform into a superhuman force",
  },

  {
    id: 3,
    projectId: 3,
    title: "Ticket System",
    description:
      "The Ticket System is a web-based application designed to manage and track tickets efficiently",
    github: "https://github.com/homayunmmdy/Ticket-System",
    demo: "https://ticket-system-beta.vercel.app/",
    imgURL: "https://i.imgur.com/nq5rXpq.png",
    files: {
      type: 3,
      file: "https://ticket-system-beta.vercel.app/",
    },
    type: "Ticket System",
    body: " Whether it's issues, requests, or any task that requires systematic tracking, this system offers a user-friendly interface and robust features to ensure smooth operations.",
  },
  {
    id: 4,
    projectId: 4,
    title: "Fashion Ecommerce",
    description:
      "The template is designed to be a sleek and modern starting point for creating an online fashion store.",
    github: "https://github.com/homayunmmdy/Fashion-Ecommerce",
    demo: "https://fashion-ecommerce-omega.vercel.app/",
    imgURL: "https://i.imgur.com/Z04vmvl.png",
    files: {
      type: 2,
      file: "https://private-user-images.githubusercontent.com/129702378/358190861-1a38da03-9d06-4f6b-af82-72b1c951a4a7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM3MTcwMzgsIm5iZiI6MTcyMzcxNjczOCwicGF0aCI6Ii8xMjk3MDIzNzgvMzU4MTkwODYxLTFhMzhkYTAzLTlkMDYtNGY2Yi1hZjgyLTcyYjFjOTUxYTRhNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxNVQxMDEyMThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05OGFlNDlmNWNjZDBlZWY4OGY0NTU4MDkxMDhhZTgyYTg0NWE4NzEwOTdkOGE4OGFkMGQyNGQ3ZTNhNzgxZGNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.o12M46-RSLZshSPVZR9-hS6AkJ4gP2VJC9NaH8hV1H8",
    },
    type: "Template",
    body: "The template is designed to be a sleek and modern starting point for creating an online fashion store.",
  },
  {
    id: 5,
    projectId: 5,
    title: "GameExplorer",
    description:
      "Welcome to GameExplorer, a dynamic game project that fetches data from the RWAG (Real World Arcade Games) API and presents it with an eye-catching UI",
    github: "https://github.com/homayunmmdy/GameExplorer",
    demo: "https://bugify.netlify.app/",
    imgURL: "https://i.imgur.com/zpypO8L.png",
    files: {
      type: 1,
      file: "https://private-user-images.githubusercontent.com/129702378/299842146-54abfb2a-7c20-479f-8dc4-38cf3217d878.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM3MTgzNzMsIm5iZiI6MTcyMzcxODA3MywicGF0aCI6Ii8xMjk3MDIzNzgvMjk5ODQyMTQ2LTU0YWJmYjJhLTdjMjAtNDc5Zi04ZGM0LTM4Y2YzMjE3ZDg3OC53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDgxNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA4MTVUMTAzNDMzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDA0MTI5ZTM4YjVmZWQyNWMxYWVkODQwYzAxYWQ2M2U4MTJkODE3ZWFlNGQwZDU0NDRhZjYwNzBkMzcwMWMyMiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.jleJakD3dTU8cGnz_i0uX9nBtruk3vwG_cmgUFkWlr8",
    },
    type: "Project",
    body: "This project allows you to filter games by genre and platform, offers seamless ordering functionality, and even supports searching through the vast game library.",
  },
  {
    id: 6,
    projectId: 6,
    title: "Bugify",
    description:
      "It allows users to track their expenses by adding, editing, and deleting and see detail items, and displays the t…",
    github: "https://github.com/homayunmmdy/Bugify",
    demo: "https://bugify.netlify.app/",
    imgURL: "https://i.imgur.com/5ZQ5GGu.png",
    files: {
      type: 1,
      file: "https://private-user-images.githubusercontent.com/129702378/357979508-ffadf2a8-f5b7-420f-b3db-766a62646d02.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM2NjUxNTEsIm5iZiI6MTcyMzY2NDg1MSwicGF0aCI6Ii8xMjk3MDIzNzgvMzU3OTc5NTA4LWZmYWRmMmE4LWY1YjctNDIwZi1iM2RiLTc2NmE2MjY0NmQwMi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxNFQxOTQ3MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNDZiZjQ2YjhkM2EzMTRjZGNlYTUwNzI3YjdkNmY1ZmYwMDc4NWI0NTk5ZDJiOWRiZDg1YWE2YzhhOTZmOGIzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tpWK2IZfI-VJcgGH0I0nfQJRRnPY3S3gtNOKbR_YwyM",
    },
    type: "Finances Tool",
    body: "Bugify is a web application designed to help users manage their finances, track expenses, and create budgets. The application is built using React, offering a user-friendly interface for all your money management needs.",
  },
  {
    id: 7,
    projectId: 7,
    title: "Box shadow generator",
    description:
      "It allows users to customize various parameters of a box-shadow such as Horizontal and Vertical offset, Blur, Spread, Color, Opacity, and Inset.",
    github: "https://github.com/homayunmmdy/Box-shadow-generator",
    demo: "https://box-shadow-generator-1.netlify.app/",
    imgURL: "https://i.imgur.com/jvqb1Qd.png",
    files: {
      type: 1,
      file: "https://private-user-images.githubusercontent.com/129702378/304180503-7be6a93f-66cb-482a-9706-6406a5a9d414.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM2NTUyMDUsIm5iZiI6MTcyMzY1NDkwNSwicGF0aCI6Ii8xMjk3MDIzNzgvMzA0MTgwNTAzLTdiZTZhOTNmLTY2Y2ItNDgyYS05NzA2LTY0MDZhNWE5ZDQxNC53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDgxNCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA4MTRUMTcwMTQ1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTA1ZmJlZWE3ZGIzYTQxZjBiN2ZlMjJkNzU3M2MxNzVlMTRjYzY4ZDFmMjQ4NmQyYTVjZGUyYjFkMTEwMjBmZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.RkJvxUuK6_vJfpligRx7XtA0WpPvMrKmBeFj8AMbmAM0",
    },
    type: "CSS Tool",
    body: "This project is a gradient generator built using Vite, React, and TypeScript. if you want to see the live demo click the link and for contribution see hour github for more information about that",
  },
  {
    id: 8,
    projectId: 8,
    title: "Agancy",
    description:
      "Agnacy is a single-page website template designed with a clean and modern aesthetic. ",
    github: "https://github.com/homayunmmdy/Agnacy",
    demo: "https://agnacy.vercel.app/",
    imgURL: "https://i.imgur.com/jnRGGep.png",
    files: {
      type: 2,
      file: "https://private-user-images.githubusercontent.com/129702378/357932162-078c5a07-1877-4e75-8d8d-70790a721f71.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM2NTY3MjEsIm5iZiI6MTcyMzY1NjQyMSwicGF0aCI6Ii8xMjk3MDIzNzgvMzU3OTMyMTYyLTA3OGM1YTA3LTE4NzctNGU3NS04ZDhkLTcwNzkwYTcyMWY3MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxNFQxNzI3MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OTM2NjAzNmQ4YWUxNTUwZDNkM2ZkNTBiNjM4YjZkNWUwNTFkYThkOGU3ZmEzNmY4YzllNTIzODE5Mzc1YWJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9C5MLDbs34WoBq-H02SLnIZsshypC1rX3TRlZdxGF8M",
    },
    type: "Template",
    body: "This template is ideal for creating portfolio websites, showcasing projects, or personal landing pages. It is fully responsive and built using React, Next.js, TypeScript, Tailwind CSS, and DaisyUI, ensuring compatibility across different devices and browsers.",
  },
  {
    id: 9,
    projectId: 9,
    title: "Gradient Generator",
    description:
      "It allows users to dynamically generate CSS color gradients and customize their orientation.",
    github: "https://github.com/homayunmmdy/Gradient-Generator",
    demo: "https://gradient-generatoroz.vercel.app/",
    imgURL: "https://i.imgur.com/4OAVtec.png",
    files: {
      type: 1,
      file: "https://private-user-images.githubusercontent.com/129702378/306074348-20c95033-4c6d-42c8-ad8c-d8902c51af0a.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM2NTQxOTcsIm5iZiI6MTcyMzY1Mzg5NywicGF0aCI6Ii8xMjk3MDIzNzgvMzA2MDc0MzQ4LTIwYzk1MDMzLTRjNmQtNDJjOC1hZDhjLWQ4OTAyYzUxYWYwYS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxNFQxNjQ0NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01OTUyOWZlOGNjMzAzNTg1ODdhMDA5Njk4MzgyMDYzYjExMWMwMzVkODM4ZGRjNDkzNTY4OGUzMWRjOTVhYjgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qdkFQgEwamGfblTdpR8JxOo3O-pfh3zKRj2YD-nu6OU",
    },
    type: "CSS Tool",
    body: "This project is a gradient generator built using Vite, React, and TypeScript. if you want to see the live demo click the link and for contribution see hour github for more information about that",
  },
];
