import React from "react";
import { Section } from "~/components/Section";

const HomeSection = () => {
  return (
    <Section
      sectionProps={{
        id: "homeSection",
      }}
    >
      <h1 className="text-4xl font-bold text-white">Pedro Raposo</h1>
      <h2 className="text-2xl font-bold text-white">Frontend Developer</h2>
    </Section>
  );
};

export default HomeSection;