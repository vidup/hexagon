import {
    UsecaseInference,
    UsecasesInference,
} from "./helpers/infer";

export namespace hexagon {
    export namespace infer {
        export namespace usecase {
            export type Infer<T extends UsecaseInference<any>> = T["infer"];
            export type InferParams<T extends UsecaseInference<any>> = T["inferParams"];
            export type InferDependencies<T extends UsecaseInference<any>> = T["inferDependencies"];
            export type InferResult<T extends UsecaseInference<any>> = T["inferResult"];
        }

        export namespace usecases {
            export type Infer<T extends UsecasesInference<any>> = T["infer"];
            export type InferParams<T extends UsecasesInference<any>> = T["inferParams"];
            export type InferDependencies<T extends UsecasesInference<any>> = T["inferDependencies"];
            export type InferResults<T extends UsecasesInference<any>> = T["inferResults"];
        }
    }
}