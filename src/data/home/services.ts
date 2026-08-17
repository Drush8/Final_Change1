import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Users,
  HeartHandshake,
  BrainCircuit,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
}

export const servicesData: Service[] = [
  {
    icon: BriefcaseBusiness,
    title: "Project Management Consultancy",
    description:
      "End-to-end PMO setup, governance frameworks, portfolio management and execution excellence.",
    outcomes: [
      "PMO Design",
      "Portfolio Governance",
      "Execution Excellence",
    ],
  },
  {
    icon: GraduationCap,
    title: "Project Leadership Coaching",
    description:
      "Personalized coaching for aspiring project leaders.",
    outcomes: [
      "Leadership Growth",
      "Executive Presence",
      "Decision Making",
    ],
  },
  {
    icon: Users,
    title: "Corporate Leadership Training",
    description:
      "Interactive workshops for leadership excellence.",
    outcomes: [
      "Communication",
      "Team Leadership",
      "Strategic Thinking",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Forge Development Program",
    description:
      "Executive mentoring for career acceleration.",
    outcomes: [
      "Confidence",
      "Career Growth",
      "Executive Mindset",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Healthcare EI Program",
    description:
      "Empathy and emotional intelligence for healthcare professionals.",
    outcomes: [
      "Empathy",
      "Patient Experience",
      "Communication",
    ],
  },
];