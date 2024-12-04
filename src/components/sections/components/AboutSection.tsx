import { ServiceCard } from "../ui/service-card";
import { SubSection } from "../ui/sub-section";
import { MainSection } from "../ui/mainSection";
import { IWhatIDo } from "@/interfaces/IWhatIDo";

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
        <div className="space-y-6">
          {/* refactor to map each card */}
          {aboutMeData.whatIDo.map((card, index) => (
            <ServiceCard
              key={index}
              icon="/placeholder.svg?height=48&width=48"
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </SubSection>
    </MainSection>
  );
}
