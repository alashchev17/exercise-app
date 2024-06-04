import type { Metadata } from "next";
import { sdk } from "@/lib/client";
import { IProgram } from "@/lib/models/IProgram";
import { IWorkout } from "@/lib/models/IWorkout";
import Link from "next/link";

interface ProgramPageProps {
  params: {
    programId: string;
  };
}

async function getProgramById(
  programId: string,
): Promise<IProgram | undefined | null> {
  const response = await sdk.getProgram({ programId });
  return response.data.program;
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const program = await getProgramById(params.programId);
  if (!program) {
    return {
      title: "Program not found",
    };
  }

  return {
    title: `Program | ${program.title}`,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const program: IProgram | undefined | null = await getProgramById(
    params.programId,
  );
  const workouts: IWorkout[] | undefined = program?.workouts;

  if (!program) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Program which you are looking for does not exist
        <Link href={"/"}>Go back</Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Program Page {program.title}
    </main>
  );
}
