import MainCardSide from "@/components/MainCardSide";
import MainRightSide from "@/components/MainRightSide";
import MobileHeader from "@/components/MobileHeader";


export default function Home() {
  return (
    <main className=' flex flex-col xl:flex-row xl:relative min-h-screen p-2 xl:p-4 max-w-[1440px] mx-auto gap-10'>
      <section className="xl:hidden h-32 w-full"><MobileHeader/></section>
      <section className="hidden xl:block xl:w-1/4 h-full sticky top-0"><MainCardSide/></section>
      <section className="w-full xl:w-3/4 h-full"><MainRightSide/></section>
    </main>
  );
}
