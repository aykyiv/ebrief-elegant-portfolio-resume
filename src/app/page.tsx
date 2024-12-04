import MainCardSide from "@/components/MainCardSide";
import MainFooter from "@/components/MainFooter";
import MainRightSide from "@/components/MainRightSide";
import MobileHeader from "@/components/MobileHeader";
import mainData from "@/information-on-page/01-mainData.json";


export default function Home() {


  return (
    <main className=" flex flex-col xl:relative min-h-screen p-2 xl:p-4 max-w-[1440px] mx-auto">
      <section className=" flex flex-col xl:flex-row  gap-10">
        <div className="xl:hidden w-full">
          <MobileHeader mainData={mainData[0]}/>
        </div>
        <div className="hidden xl:block xl:min-w-[375px] h-full sticky top-[72px]">
          <MainCardSide mainData={mainData[0]}/>
        </div>
        <div className="w-full xl:w-full h-full flex flex-col gap-5">
          <MainRightSide />
        </div>
      </section>
      <section>
        <MainFooter />
      </section>
    </main>
  );
}
