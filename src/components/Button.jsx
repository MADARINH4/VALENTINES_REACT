export default function Button({ size, children, ...props }) {
  return (
    <button {...props}>
      <span style={{ fontSize: `${size}px` }}>{children}</span>
    </button>
  );
}
