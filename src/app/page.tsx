import { sdk } from "@/lib/client";
import { IProgram } from "@/lib/models/IProgram";

export default async function Home() {
  const response = await sdk.getPrograms();
  const programs: IProgram[] = response.data.programs;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Exercise App Home
    </main>
  );
}
