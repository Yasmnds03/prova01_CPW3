import { ChangeEventHandler } from "react";

import styles from './TextAreaCounter.module.css';

interface Props {
  handleTextChange: ChangeEventHandler<HTMLTextAreaElement>
  text: string
};

export default function TextAreaCounter({ handleTextChange, text }: Props) {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        name="text" 
        id="text" 
        placeholder="Digite seu texto" 
        value={text} 
        onChange={handleTextChange}
        cols={50}
        rows={10}
      />
    </div>
  );
}
