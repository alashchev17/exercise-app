import type { IExercise } from "@/lib/models/IExercise";

export interface IWorkout {
  __typename?: "Workout" | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  bodyPart?: string | null | undefined;
  image?:
    | {
        fileName: string | null | undefined;
        url: string | null | undefined;
      }
    | null
    | undefined;
  exercises: IExercise[];
}
