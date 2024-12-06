import MainCardSide from "@/components/MainCardSide";
import MainFooter from "@/components/MainFooter";
import MainRightSide from "@/components/MainRightSide";
import MobileHeader from "@/components/navigation/MobileHeader";
import mainData from "@/information-on-page/01-mainData.json";

export default function Home() {
  return (
    <main className=" flex flex-col xl:relative min-h-screen p-2 xl:p-4 max-w-[1440px] mx-auto overflow-clip">
      <section className=" relative flex flex-col xl:flex-row  gap-10">
        <div className="xl:hidden w-full">
          <MobileHeader mainData={mainData[0]} />
        </div>
        <div className="hidden xl:block xl:min-w-[375px] h-full sticky top-[72px] z-50">
          <MainCardSide mainData={mainData[0]} />
        </div>
        <div className="w-full xl:w-full h-full flex flex-col gap-5">
          <MainRightSide mainData={mainData[0]} />
        </div>
      </section>
      <section>
        <MainFooter mainData={mainData[0]} />
      </section>
    </main>
  );
}
