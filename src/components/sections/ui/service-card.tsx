import { ServiceCardProps } from "@/interfaces/IWhatIDo";

export function ServiceCard({
  title,
  description,
  icon,
  className,
  // index,
}: ServiceCardProps) {
  return (
    <div className={`flex bg-white  z-30 relative items-start gap-4 mb-6 ${className}`}>
      <div className="  flex-shrink-0 w-12 h-12 rounded-[var(--border-sm)] bg-background p-2">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-secondary mb-2">{title}</h4>
        <p className="text-fonts">{description}</p>
      </div>
      {/* <div
        className={`absolute -left-4 top-4 bottom-0 w-[100px] h-[50px] z-10 ${
          index % 2 === 0 ? "bg-secondary" : "bg-primary"
        }`}
      /> */}
    </div>
  );
}
