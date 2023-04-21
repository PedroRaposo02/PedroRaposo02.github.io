import React from "react";
import { type SectionProps } from "~/types";

export const Section = ({
  sectionProps,
  children,
}: {
  sectionProps: SectionProps;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center"
      id={sectionProps.id}
    >
      {children}
    </section>
  );
};
