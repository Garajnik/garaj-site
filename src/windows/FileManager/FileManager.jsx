import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./FileManager.module.css";

function LinkComponent({ node, onClick }) {
  return (
    <div className={styles.link} onClick={() => onClick(node)}>
      <img src={node.icon} alt="" />
      <span>{node.name}</span>
    </div>
  );
}

function DirectoryComponent({ node, onFileSelect }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.directory}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <img
          src={
            isExpanded
              ? "/src/assets/Icons/Minus.svg"
              : "/src/assets/Icons/Plus.svg"
          }
          alt=""
        />
        <span>{node.name}</span>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.children}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {node.children.map((child, idx) =>
              child.type === "directory" ? (
                <DirectoryComponent
                  key={idx}
                  node={child}
                  onFileSelect={onFileSelect}
                />
              ) : (
                <LinkComponent key={idx} node={child} onClick={onFileSelect} />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FileManager({ nodes, onFileSelect }) {
  return (
    <div className={styles.container}>
      {nodes.map((node, idx) =>
        node.type === "directory" ? (
          <DirectoryComponent
            key={idx}
            node={node}
            onFileSelect={onFileSelect}
          />
        ) : (
          <LinkComponent key={idx} node={node} onClick={onFileSelect} />
        )
      )}
    </div>
  );
}
