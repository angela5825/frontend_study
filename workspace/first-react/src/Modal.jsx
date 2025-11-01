import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  onCancel,
  onConfirm,
  width,
  height,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <div className={styles.modal_content} style={{ width, height }}>
          <div className={styles.modal_header}>
            <span className={styles.close} onClick={onClose}>
              &times;
            </span>
            <div className={styles.modal_title}>{title}</div>
          </div>
          <div className={styles.modal_body}>{content}</div>
          <div className={styles.modal_footer}>
            {onCancel && (
              <button className={styles.cancelBtn} onClick={onCancel}>
                취소
              </button>
            )}
            {onConfirm && (
              <button className={styles.confirmBtn} onClick={onConfirm}>
                확인
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
