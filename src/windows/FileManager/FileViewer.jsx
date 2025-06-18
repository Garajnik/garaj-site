import ReactMarkdown from "react-markdown";
import styles from "./FileViewer.module.css";

export default function FileViewer({ file }) {
  if (!file) {
    return (
      <div className={styles.placeholder}>Выберите файл для просмотра</div>
    );
  }
  return (
    <div className={styles.viewer}>
      <ReactMarkdown>{file.content}</ReactMarkdown>
    </div>
  );
}
