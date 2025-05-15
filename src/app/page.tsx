import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ContractWork from "@/components/ContractWork";
import VRProjects from "@/components/VRProjects";
import PersonalJourney from "@/components/PersonalJourney";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <ContractWork />
      <VRProjects />
      <PersonalJourney />
    </main>
  );
}
