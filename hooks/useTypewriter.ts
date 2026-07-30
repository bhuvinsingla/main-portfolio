import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], typingMs = 65, pauseMs = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = isDeleting ? typingMs / 2 : typingMs;

    if (!isDeleting && display === word) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (isDeleting && display === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(() => {
      setDisplay((current) => {
        if (isDeleting) return word.slice(0, current.length - 1);
        return word.slice(0, current.length + 1);
      });
    }, delay);

    return () => clearTimeout(tick);
  }, [display, isDeleting, wordIndex, words, typingMs, pauseMs]);

  return display;
}
