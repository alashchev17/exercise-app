import type { Metadata } from "next";
import { sdk } from "@/lib/client";
import { IProgram } from "@/lib/models/IProgram";
import { IWorkout } from "@/lib/models/IWorkout";

interface ProgramPageProps {
  params: {
    programId: string;
  };
}

async function getProgramById(programId: string): Promise<IProgram> {
  const response = await sdk.getProgram({ programId });
  return response.data.program as IProgram;
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const program: IProgram = await getProgramById(params.programId);
  return {
    title: `Program | ${program.title}`,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const program: IProgram = await getProgramById(params.programId);
  const workouts: IWorkout[] = program?.workouts;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Program Page {program.title}
    </main>
  );
}
