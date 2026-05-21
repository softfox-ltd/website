interface LogoProps {
  size?: number;
  onDark?: boolean;
  className?: string;
}

export function Logo({ size = 28, onDark = false, className }: LogoProps) {
  const dotSize = Math.max(Math.round(size * 0.055), 3);
  const dotGapAbove = Math.round(size * 0.37);

  const inkColor = onDark ? '#f8f7f3' : 'var(--brand-ink)';
  const copperColor = 'var(--brand-highlight)';

  return (
    <div className={`flex flex-col items-center${className ? ` ${className}` : ''}`}>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: `${size}px`,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          color: inkColor,
        }}
      >
        Softfox
      </span>
      <span
        style={{
          display: 'block',
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: '50%',
          backgroundColor: copperColor,
          marginTop: `${dotGapAbove}px`,
        }}
      />
    </div>
  );
}
