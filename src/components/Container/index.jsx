export default function Container({ children, className }) {
  return (
    <div
      className={`sm:py-20 flex flex-col gap-16 sm:p-40  mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
