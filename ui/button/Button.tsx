import styles from './button.module.scss';
import cx from 'classnames';

interface IButton {
  label: string;
  onClick?: () => void;
  className?: string;
  rootClassName?: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'outline';
}

export default function Button({
  label,
  onClick,
  className,
  disabled,
  rootClassName,
  type = 'primary'
}: IButton) {
  let classes;

  if (type === 'primary') {
    classes = cx(styles.primaryBtn);
  }

  if (type === 'secondary') {
    classes = cx(styles.secondaryBtn);
  }

  if (type === 'outline') {
    classes = cx(styles.outlineBtn);
  }


  return (
    <button
      disabled={disabled}
      className={`${className} rounded-[12px] text-white h-[60px] ${classes}`}
      onClick={onClick}
    >
      <div className={rootClassName}>
        {label}
      </div>
    </button>
  )
}
