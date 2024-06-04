import { sdk } from "@/lib/client";

export default async function Home() {
  const response = await sdk.getPrograms();
  const programs = response.data.programs;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Exercise App Home
    </main>
  );
}
