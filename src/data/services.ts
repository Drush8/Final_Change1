import {
  Brain,
  BriefcaseBusiness,
  HeartHandshake,
  LineChart,
} from "lucide-react";

import scientificIntelligenceImage from "../assets/images/scientific-intelligence-service.jpg";
import organizationalOutputImage from "../assets/images/organizational-output-delivery.jpg";

export const services = [

  {
    id: "organizational-output-delivery",
    title: "Organizational Output & Delivery Solutions",
    icon: LineChart,
    subtitle:
      "Improve organisational performance, output and delivery through practical, tailor-made solutions.",
    image: organizationalOutputImage,
    description:
      "We help organisations understand their unique challenges, identify root causes and develop practical, tailor-made solutions that improve productivity, performance, execution and business outcomes. Our approach can address challenges such as budget pressure, customer retention, output and delivery, financial leakage and inefficient use of resources.",
    benefits: [
      "PMO Services",
      "Fractional PMO / Fractional PMP",
      "Business Consultancy",
      "Organizational Output & Delivery",
      "Customer Relationship Management (CRM)",
      "Customer Feedback",
    ],
  },
  {
    id: "executive-leadership",
    title: "Executive Leadership",
    icon: BriefcaseBusiness,
    subtitle:
      "Develop leaders capable of driving organisational transformation.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    description:
      "Executive Leadership Coaching focuses on developing strategic thinking, decision-making, stakeholder management and organisational influence. Leaders learn practical frameworks used by senior executives to inspire teams, manage change and deliver measurable business outcomes.",
    benefits: [
      "Strategic Decision Making",
      "Executive Presence",
      "Leadership Communication",
      "Organisational Influence",
      "Change Leadership",
    ],
  },

  {
    id: "project-excellence",
    title: "Project Excellence",
    icon: BriefcaseBusiness,
    subtitle:
      "Deliver projects with confidence, governance and operational excellence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    description:
      "Strengthen project execution through modern governance models, PMO excellence, portfolio management and stakeholder engagement. Build predictable delivery systems across organisations.",
    benefits: [
      "Portfolio Management",
      "PMO Design",
      "Project Governance",
      "Risk Management",
      "Delivery Excellence",
    ],
  },

  {
    id: "scientific-intelligence",
    title: "Scientific Intelligence",
    icon: Brain,
    subtitle:
      "Strengthen scientific thinking, innovation and decision-making for research and technical leaders.",
    image: scientificIntelligenceImage,
    description:
      "Develop scientific leaders who can connect deep expertise with critical thinking, innovation and confident decision-making in complex research and technical environments.",
    benefits: [
      "Scientific Decision Making",
      "Critical Thinking",
      "Innovation Leadership",
      "Research Strategy",
      "Technical Leadership",
    ],
  },

  {
    id: "emotional-intelligence",
    title: "Emotional Intelligence",
    icon: HeartHandshake,
    subtitle:
      "Build trust, resilience and stronger workplace relationships.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    description:
      "Improve self-awareness, empathy, communication and conflict management. Emotional Intelligence is the foundation of high-performing teams and sustainable leadership.",
    benefits: [
      "Self Awareness",
      "Empathy",
      "Conflict Resolution",
      "Coaching Skills",
      "Team Motivation",
    ],
  },


];
