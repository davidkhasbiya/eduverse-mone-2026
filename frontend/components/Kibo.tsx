type KiboProps = { size?: "sm" | "md" | "lg"; mood?: "happy" | "thinking" | "celebrate"; label?: string };
const sizes = { sm: "h-12 w-12", md: "h-20 w-20", lg: "h-56 w-56" };
export default function Kibo({ size = "md", mood = "happy", label = "Kibo, teman belajar EduVerse" }: KiboProps) {
  return <div className={`kibo ${sizes[size]} kibo-${mood}`} role="img" aria-label={label}><span className="kibo-aura" /><span className="kibo-antenna" /><span className="kibo-spark">✦</span><span className="kibo-body"><span className="kibo-eye kibo-eye-left" /><span className="kibo-eye kibo-eye-right" /><span className="kibo-mouth" /></span><span className="kibo-arm kibo-arm-left" /><span className="kibo-arm kibo-arm-right" /><span className="kibo-badge">+10 XP</span></div>;
}
