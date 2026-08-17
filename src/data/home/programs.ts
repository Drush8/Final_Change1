import type { LucideIcon } from "lucide-react";
import {
  Compass,
  ShipWheel,
  Anchor,
  Navigation,
  Trophy,
  Flame,
  HeartHandshake,
} from "lucide-react";

export interface ProgramStage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const navigatorStages: ProgramStage[] = [
  {
    icon: Compass,
    title: "Compass",
    description:
      "Discover your strengths, leadership style and professional direction.",
  },
  {
    icon: ShipWheel,
    title: "Cruise",
    description:
      "Build project execution, communication and stakeholder management skills.",
  },
  {
    icon: Anchor,
    title: "Anchor",
    description:
      "Develop confidence, resilience and effective decision-making.",
  },
  {
    icon: Navigation,
    title: "Voyage",
    description:
      "Lead teams, manage complexity and deliver strategic outcomes.",
  },
  {
    icon: Trophy,
    title: "Nexus",
    description:
      "Achieve executive presence and become a transformational leader.",
  },
];

export const programsData: Program[] = [
  {
    icon: Flame,
    title: "Forge",
    description:
      "A personalised leadership mentoring program focused on confidence, executive mindset and career acceleration.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion Code",
    description:
      "Emotional intelligence and empathy development for hospitals and healthcare professionals.",
  },
];