import { useEffect, useRef, useState } from 'react';

const DecryptedText = ({
  text = '',
  className = '',
  delay = 100,
  animateOn = 'view',
  characters = 'ABCD1234!?',
  parentClassName = '',
  encryptedClassName = 'encrypted',
}) => {
  const letters = text.split(''); // Dividimos el texto en caracteres individuales, incluyendo espacios
  const [inView, setInView] = useState(false);
  const [decryptedLetters, setDecryptedLetters] = useState(Array(letters.length).fill(''));
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      letters.forEach((letter, index) => {
        setTimeout(() => {
          setDecryptedLetters(prev => {
            const newDecryptedLetters = [...prev];
            newDecryptedLetters[index] = letter;
            return newDecryptedLetters;
          });
        }, index * delay);
      });
    }
  }, [inView, letters, delay]);

  return (
    <p ref={ref} className={`${parentClassName} ${className}`}>
      {decryptedLetters.map((letter, index) => (
        <span key={index} className={letter ? '' : encryptedClassName}>
          {letter || characters[Math.floor(Math.random() * characters.length)]}
        </span>
      ))}
    </p>
  );
};

export default DecryptedText;
