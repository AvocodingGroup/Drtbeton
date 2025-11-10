export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src="/logo-drtbeton.svg"
      alt="DrtBeton Logo"
      className={className}
    />
  );
}