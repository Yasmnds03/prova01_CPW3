import { ChangeEvent, useState } from "react";

import Counts from "../../components/Counts";
import TextAreaCounter from "../../components/TextAreaCounter";

import styles from './styles.module.css';

const Home = () => {
  const [text, setText] = useState<string>("");

  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  const words = text.trim().split(/\s+/);
  
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = words.join('').length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contador de palavras</h1>
      <TextAreaCounter text={text} handleTextChange={handleTextChange} />
      <Counts wordCount={wordCount} charCount={charCount} />
    </div>
  );
}

export default Home
