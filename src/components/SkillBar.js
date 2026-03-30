import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ name, level, icon }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-bar-item" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">
          {icon && <img src={icon} alt={name} />}
          {name}
        </span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
