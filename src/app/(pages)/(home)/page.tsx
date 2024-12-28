import CreatorsThrive from "./components/CreatorsThrive";
import InfluenceSection from "../earn-money/components/InfluenceSection";
import FAQsSection from "./components/FAQsSection";
import FollowersGraph from "./components/FollowersGraph";
import Influences from "./components/Influences";
import ProfileEngagementSection from "./components/ProfileEngagementSection";
import "./styles/styles.scss";
// import EarningPath from "./components/EarningPath";

export default function Home() {
  return (
    <>
      <div className="pt-12 z-20 pb-8 flex gap-2 flex-col justify-center items-center">
        <h2 className="md:text-8.5xl text-6xl">Askppl</h2>
        <span className="md:text-4xl text-hazyPearl">
          For all the questions AI can’t answer
        </span>
        <button className="bg-white mt-6 p-4 text-dark font-bold rounded-2xl text-lg">
          Download app
        </button>
      </div>
      <ProfileEngagementSection />
      <FollowersGraph />
      <Influences />
      {/* <EarningPath /> */}
      <CreatorsThrive />
      <FAQsSection />
      <InfluenceSection />
    </>
  );
}
