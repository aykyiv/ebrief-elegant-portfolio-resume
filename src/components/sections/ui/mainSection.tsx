interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function MainSection({ title, children, className }: SectionProps) {
  return (
    <section className={`w-full max-w-4xl mx-auto flex flex-col gap-7 py-8 ${className}`}>
      <div className="flex flex-row items-center ">
        <h1 className=" font-semibold text-primary min-w-max">
          {title}
        </h1>
        <div className="w-full h-1 rounded-sm bg-primary"></div>
      </div>
      {children}
    </section>
  )
}

