"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const mentors = [
  {
    name: "Mr. Arjun Singh",
    role: "Full-Stack Developer",
    company: "Startup Founder",
    experience: 5,
    specializations: ["MERN Stack", "DevOps", "Entrepreneurship"],
    achievements: ["Successful Startup Exit", "Forbes 30 Under 30"],
    linkedin: "#",
    github: "#",
    email: "arjun@example.com",
  },
  {
    name: "Ms. Priya Mehra",
    role: "AI Researcher",
    company: "Google AI",
    experience: 7,
    specializations: ["Machine Learning", "NLP", "Data Science"],
    achievements: ["Published 10+ Research Papers", "Keynote at NeurIPS"],
    linkedin: "#",
    github: "#",
    email: "priya@example.com",
  },
  {
    name: "Dr. Ravi Malhotra",
    role: "Cybersecurity Expert",
    company: "MITRE",
    experience: 10,
    specializations: ["Network Security", "Ethical Hacking", "Risk Analysis"],
    achievements: ["Speaker at DEF CON", "Designed Govt Security Systems"],
    linkedin: "#",
    github: "#",
    email: "ravi@example.com",
  },
];

export default function MentorsPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
          Meet Our Mentors
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((expert, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-md bg-white max-w-sm mx-auto">
              <div className="bg-gradient-to-b from-blue-100 via-yellow-50 to-white p-6 flex justify-center items-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">
                  &lt;/&gt;
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold">{expert.name}</h2>
                <p className="text-blue-600 font-medium">{expert.role}</p>
                <p className="text-gray-500">{expert.company}</p>

                <div className="flex items-center gap-2 text-yellow-600 mt-3 font-medium">
                  🏅 {expert.experience}+ years Experience
                </div>

                <div className="mt-3">
                  <p className="font-semibold mb-1">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.specializations.map((spec, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-semibold mb-1">Key Achievements:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {expert.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-start gap-4 mt-5 text-gray-600">
                  {expert.linkedin && (
                    <a href={expert.linkedin} target="_blank">
                      <FaLinkedin className="text-xl hover:text-blue-500" />
                    </a>
                  )}
                  {expert.github && (
                    <a href={expert.github} target="_blank">
                      <FaGithub className="text-xl hover:text-gray-800" />
                    </a>
                  )}
                  {expert.email && (
                    <a href={`mailto:${expert.email}`}>
                      <FaEnvelope className="text-xl hover:text-red-500" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
