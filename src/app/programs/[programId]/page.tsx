import type { Metadata } from "next";
import Link from "next/link";

import { sdk } from "@/lib/client";

interface ProgramPageProps {
  params: {
    programId: string;
  };
}

async function getProgramById(
  programId: string,
) {
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
  const program = await getProgramById(
    params.programId,
  );
  const workouts = program?.workouts;

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
