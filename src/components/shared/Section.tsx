import type { ReactNode } from "react";
import Container from "./Container";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`py-12 lg:py-16 ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}