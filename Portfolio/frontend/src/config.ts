export const portfolioConfig = {
  personalInfo: {
    name: "Debdipttya Das",
    title: "Full Stack Developer",
    bio: "Passionate Full Stack Developer with expertise in React, Spring Boot, and MySQL. Building scalable applications using modern technologies.",
    email: "das39808@gmail.com",
    phone: "+91 6290552384",
    location: "Kolkata, West Bengal, India",
    github: "https://github.com/DebdipttyaDas",
    linkedin: "https://www.linkedin.com/in/debdipttya-das-678755310",
    twitter: "https://twitter.com/yourhandle"
  }
};

export const apiConfig = {
  baseURL: (import.meta as any).env?.VITE_API_URL || "http://localhost:8080/api",
  timeout: 5000
};
