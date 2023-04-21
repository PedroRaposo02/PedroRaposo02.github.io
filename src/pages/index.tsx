import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "~/components/Navbar";
import { Section } from "~/components/Section";
import { type NavbarPropList, type NavbarProp } from "~/types";


const aboutSection: NavbarProp = { id: "aboutSection", name: "About" };
const projectsSection: NavbarProp = { id: "projectsSection", name: "Projects" };
const contactSection: NavbarProp = { id: "contactsSection", name: "Contact" };
const navbarList: NavbarPropList = {
  navbarItems: [aboutSection, projectsSection, contactSection]
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Pedro Raposo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar navbarItems={navbarList.navbarItems} />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Section sectionProps={{ id: "homeSection" }}>
          <h1 className="text-4xl font-bold text-white">Pedro Raposo</h1>
          <h2 className="text-2xl font-bold text-white">Frontend Developer</h2>
        </Section>
        <Section sectionProps={{ id: "aboutSection" }}>about</Section>
        <Section sectionProps={{ id: "projectsSection" }}>projects</Section>
        <Section sectionProps={{ id: "contactsSection" }}>contact</Section>
      </main>
    </>
  );
};

export default Home;
