import React from 'react';
import SkillBar from '../components/SkillBar';
import ScrollReveal from '../components/ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'SQL', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
      ],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Spring Boot', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'REST API', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
        { name: 'Microservices', level: 93, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
        { name: 'PostgreSQL', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Spring Security (JWT)', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      ],
    },
    {
      name: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'HTML / CSS', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'Redux / NgRx', level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Ant Design', level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg' },
        { name: 'Angular Material', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularmaterial/angularmaterial-original.svg' },
      ],
    },
    {
      name: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'GCP', level: 68, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Postman', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'IntelliJ IDEA', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
        { name: 'VS Code', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Swagger', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg' },
        { name: 'Maven', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg' },
      ],
    },
    {
      name: 'AI & Intelligence',
      icon: '🤖',
      skills: [
        { name: 'Ollama (Local LLMs)', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'LLM API Integration', level: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
        { name: 'RAG Pipelines', level: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
        { name: 'ChromaDB', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Prompt Engineering', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg' },
        { name: 'Python (AI/Scripts)', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      ],
    },
  ];

  return (
    <div className="section skills-section">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            My <span className="accent">tech stack</span>
          </h2>
        </ScrollReveal>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-name">{category.name}</div>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, sIndex) => (
                    <SkillBar
                      key={sIndex}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
