import React from "react";
import { Section } from "~/components/Section";

const ContactSection = () => {
  return (
    <Section
      sectionProps={{
        id: "contactsSection",
      }}
    >
      <h1 className="text-4xl font-bold text-white">Contacts</h1>
    </Section>
  );
};

export default ContactSection;