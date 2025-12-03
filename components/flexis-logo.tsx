export default function FlexisLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 0L35 10V30L20 40L5 30V10L20 0Z" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M20 8L28 13V27L20 32L12 27V13L20 8Z" stroke="white" strokeWidth="1" fill="none" />
      <path d="M20 14L24 16.5V23.5L20 26L16 23.5V16.5L20 14Z" fill="white" />
    </svg>
  )
}
