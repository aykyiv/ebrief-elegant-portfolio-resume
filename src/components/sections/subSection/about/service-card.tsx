import { IServiceCardProps } from "@/interfaces/IWhatIDo";
import Image from "next/legacy/image";

export function ServiceCard({
  title,
  description,
  icon,
  className,
  index,
}: IServiceCardProps) {
  return (
    <div className={`flex   bg-white min-h-[100px]  pt-8 xl:pt-0 z-30 items-center px-4 gap-4  ${className} `}>
      <div className={`  flex-shrink-0 w-14 h-14 rounded-sm ${index % 2 === 0 ? "bg-primary" : "bg-secondary" } p-2`}>
        <Image src={icon} alt={title} width={45} height={45} className="w-full h-full" />
      </div>
      <div className="flex flex-col xl:flex-row ">
        <h3 className={`text-xl ${index % 2 === 0 ? "text-primary" : "text-secondary"} mb-2 xl:w-1/3 m-auto text-center font-bold`}>{title}</h3>
        <p className="text-fonts xl:w-2/3 mx-auto">{description}</p>
      </div>
    
    </div>
  );
}
