import { IMainSectionProps } from "@/interfaces/IWhatIDo";


export function MainSection({ title, children, className, id }: IMainSectionProps) {
  return (
    <section id={id} className={`w-full max-w-4xl mx-auto flex flex-col gap-7 xl:py-8 ${className}`}>
      <div className="flex flex-row items-center  gap-4">
        <h1 className=" font-semibold text-primary min-w-max">
          {title}
        </h1>
        <div className="w-full h-1 rounded-sm bg-primary"></div>
      </div>
      {children}
    </section>
  )
}

