import { ISubSectionProps } from "@/interfaces/IWhatIDo";

export function SubSection({
  title,
  children,
  className,
  ref,
}: ISubSectionProps) {
  return (
    <div
      ref={ref}
      className={` flex flex-col gap-4 ${className} bg-white rounded-sm p-4 py-6  xl:p-6 border-white border-2 shadow-inset`}
    >
      <div className="relative  font-medium text-fonts mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
        <h2 className="pl-4">{title}</h2>
      </div>
      {children}
    </div>
  );
}
