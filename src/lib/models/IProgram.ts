import type { IWorkout } from "@/lib/models/IWorkout";

export interface IProgram {
  __typename?: "Program" | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?:
    | { __typename?: "Asset" | undefined; fileName: string; url: string }
    | null
    | undefined;
  workouts: IWorkout[];
}

interface Program {
  __typename?: "Program" | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?:
    | { __typename?: "Asset" | undefined; fileName: string; url: string }
    | null
    | undefined;
  workouts: IWorkout[];
}
