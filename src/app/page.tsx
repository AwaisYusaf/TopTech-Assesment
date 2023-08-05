import SectionOne from "@/components/SectionOne";

export type User = {
  username: string;
  email: string;
  phone: string;
  linkedin: string;
  company: string;
};

export default function Home() {
  return (
    <main>
      <SectionOne
        URI={process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql"}
      />
    </main>
  );
}
