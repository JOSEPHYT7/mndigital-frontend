/**
 * Dark veil overlay for the home page background.
 */
export default function DarkVeil({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)',
      }}
    />
  );
}
