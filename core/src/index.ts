import {
    UsecaseInference,
    UsecasesInference,
    DrivingPortInference,
    UseCase
} from "./infer";

export namespace hexagon {
    export namespace infer {
        export namespace usecase {
            export type Infer<T extends UseCase> = UsecaseInference<T>["infer"];
            export type InferParams<T extends UseCase> = UsecaseInference<T>["inferParams"];
            export type InferDependencies<T extends UseCase> = UsecaseInference<T>["inferDependencies"];
            export type InferResult<T extends UseCase> = UsecaseInference<T>["inferResult"];
        }

        export namespace usecases {
            export type Infer<T extends Record<string, UseCase>> = UsecasesInference<T>["infer"];
            export type InferParams<T extends Record<string, UseCase>> = UsecasesInference<T>["inferParams"];
            export type InferDependencies<T extends Record<string, UseCase>> = UsecasesInference<T>["inferDependencies"];
            export type InferResults<T extends Record<string, UseCase>> = UsecasesInference<T>["inferResults"];
        }

        export namespace drivingPort {
            export type Infer<T extends Record<string, UseCase>> = DrivingPortInference<T>["infer"];
        }
    }
}