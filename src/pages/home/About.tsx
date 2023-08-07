import React from "react";
import { Section } from "~/components/Section";

const AboutSection = () => {
  return (
    <Section sectionProps={{ id: "aboutSection" }}>
      <h1 className="text-4xl font-bold text-white">About</h1>
    </Section>
  );
};

export default AboutSection;
