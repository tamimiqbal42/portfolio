import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamim Iqbal | CSE Student & Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tamim Iqbal, a CSE student and frontend developer from Dhaka, Bangladesh, skilled in React, JavaScript, Tailwind CSS, Python and Django.",
      },
      { property: "og:title", content: "Tamim Iqbal | CSE Student & Frontend Developer" },
      {
        property: "og:description",
        content:
          "Explore Tamim Iqbal's frontend projects, skills, education, IT sales experience and leadership journey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
