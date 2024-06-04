export interface IExercise {
  __typename?: "Exercise" | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  steps?:
    | {
        title: string | null | undefined;
      }[]
    | null
    | undefined;
  image?:
    | {
        fileName: string | null | undefined;
        url: string | null | undefined;
      }
    | null
    | undefined;
  videoUrl?: string | null | undefined;
  duration?: number | null | undefined;
  repetitions?: number | null | undefined;
}
