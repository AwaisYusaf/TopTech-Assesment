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
        URI={
          process.env.GRAPHQL_URI ||
          "https://toptech-assesment.vercel.app/api/graphql"
        }
      />
    </main>
  );
}
