interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const AnimatedBackground = ({ mousePosition }: AnimatedBackgroundProps) => {
  return (
    <div
      className="fixed inset-0 opacity-30 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`,
      }}
    />
  );
};