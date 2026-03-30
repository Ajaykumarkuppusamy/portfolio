import React, { useEffect, useState, useCallback } from 'react';

const WORDS = ["AJAY KUMAR KUPPUSAMY", "SOFTWARE ENGINEER", "FULL STACK DEVELOPER"];

const Typewriter = React.memo(() => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentWord = WORDS[wordIndex];

    if (isDeleting) {
      setDisplayText(currentWord.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    } else {
      setDisplayText(currentWord.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }
  }, [wordIndex, charIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 60 : 100;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  return (
    <div className="hero-typewriter">
      <span className="typewriter-text">{displayText}</span>
      <span className="cursor" />
    </div>
  );
});

export default Typewriter;
