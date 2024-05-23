import styles from './typography.module.scss';

interface ITypography {
  type?: 'h1' | 'sub' | 'body' | 'p1' | 'p2' | 'superH1';
  text: string;
  className?: string;
  color?: string;
}

export default function Typography({
  text,
  type = 'h1',
  color = 'text-white',
  className,
}: ITypography) {
  switch (type) {
    case 'h1':
      return <h1 className={`${styles.h1} ${className} ${color}`}>{text}</h1>;
    case 'superH1':
      return <h1 className={`${styles.superH1} ${className} ${color}`}>{text}</h1>;
    case 'sub':
      return <h2 className={`${styles.sub} ${className} ${color}`}>{text}</h2>;
    case 'body':
      return <p className={`${styles.body} ${className} ${color}`}>{text}</p>;
    case 'p1':
      return <p className={`${styles.p1} ${className} ${color}`}>{text}</p>;
    case 'p2':
      return <p className={`${styles.p2} ${className} ${color}`}>{text}</p>;
    default:
      return <p className={`${styles.body} ${className} ${color}`}>{text}</p>;
  }
}
