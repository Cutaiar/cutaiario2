export const A = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-700 hover:text-amber-500 hover:underline underline-offset-2 transition-colors duration-100 outline-none focus-visible:text-amber-500 focus-visible:underline"
    >
      {children}
    </a>
  );
};
