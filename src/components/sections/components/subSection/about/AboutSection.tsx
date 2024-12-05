import { ServiceCard } from "./service-card";
import { SubSection } from "../../../ui/sub-section";
import { IWhatIDo } from "@/interfaces/IWhatIDo";
import { MainSection } from "@/components/sections/ui/MainSection";

export function AboutSection({ aboutMeData }: { aboutMeData: IWhatIDo }) {
  return (
    <MainSection title={aboutMeData.title} className="relative">
      <SubSection
        title={aboutMeData.knowMeTitle}
        className="relative overflow-clip"
      >
        <p className="text-fonts">{aboutMeData.knowMe.description}</p>
        <button className="text-primary hover:underline mt-2">
          Show more...
        </button>
        <div className="absolute w-[350px] h-[350px] blur-[150px] bg-red-300/20 top-0 left-0 transform  -translate-y-[50%]"></div>
      </SubSection>
      <div className="z-[-1] absolute top-[104px] -left-4  w-14 h-14 rounded-sm bg-secondary"></div>

      <SubSection title={aboutMeData.whatIDoTitle}>
        <div className="flex flex-col gap-8 ">
          {aboutMeData.whatIDo.map((card, index) => (
            <div key={index} className="group relative ">
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={index}
                className="relative z-20 rounded-[5px]"
              />
              <div
                className={`absolute -left-2 rounded-sm -top-2 bottom-0 w-[80] h-[80] transition-all duration-500 group-hover:w-[860]  group-hover:h-[115] z-10 ${
                  index % 2 === 1 ? "bg-secondary" : "bg-primary"
                }`}
              />
            </div>
          ))}
        </div>
      </SubSection>
    </MainSection>
  );
}
