import styles from "./anchor.module.css";

export const A = ({
  id,
  href,
  children,
}: {
  id?: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.a} text-amber-700 hover:text-amber-500 hover:underline underline-offset-2 transition-colors duration-100 outline-none focus-visible:text-amber-500 focus-visible:underline scroll-mt-8`}
    >
      {children}
    </a>
  );
};
