import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "~/components/Navbar";
import { type NavbarPropList, type NavbarProp } from "~/types";
import { HomeSection } from "./home/Home";
import { AboutSection } from "./home/About";
import { ProjectSection } from "./home/Projects";
import { ContactSection } from "./home/Contacts";


const aboutSection: NavbarProp = { id: "aboutSection", name: "About" };
const projectsSection: NavbarProp = { id: "projectsSection", name: "Projects" };
const contactSection: NavbarProp = { id: "contactsSection", name: "Contact" };
const navbarList: NavbarPropList = {
  navbarItems: [aboutSection, projectsSection, contactSection],
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pedro Raposo</title>
        <meta name="description" content="Pedro Raposo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar navbarItems={navbarList.navbarItems} />
      <main className="p-0 flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] scroll-smooth overflow-y-scroll no-scrollbar snap-mandatory snap">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
