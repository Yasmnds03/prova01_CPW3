import styles from './styles.module.css';

interface Props {
  wordCount: number
  charCount: number
};

export default function Counts({ wordCount, charCount }: Props) {
  return (
    <div className={styles.card}>
      <p>Palavras: {wordCount}</p>
      <p>Caracteres: {charCount}</p>
    </div>
  );
}
