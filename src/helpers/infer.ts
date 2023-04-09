/**
 * The "usecases" functions are the main entry points for this inference tool.
 * They need to provide the following signature: (params: Record<string, any>, dependencies: Record<string, any>) => any
*/

type UseCase = (params: Record<string, any>, dependencies: Record<string, any>) => any;

type Extractor<T extends UseCase> = T extends (params: infer P, dependencies: infer D) => infer R ? {
    Params: P;
    Dependencies: D;
    Result: R;
} : never;

type ParametersExtractor<T extends UseCase> = T extends (params: infer P, dependencies: any) => any ? P : never;
type DependenciesExtractor<T extends UseCase> = T extends (params: any, dependencies: infer D) => any ? D : never;
type ResultExtractor<T extends UseCase> = T extends (params: any, dependencies: any) => infer R ? R : never;

export type UsecaseInference<T extends UseCase> = {
    infer: Extractor<T>;
    inferParams: ParametersExtractor<T>;
    inferDependencies: DependenciesExtractor<T>;
    inferResult: ResultExtractor<T>;
}

export type UsecasesInference<T extends Record<string, UseCase>> = {
    infer: { [K in keyof T]: Extractor<T[K]> };
    inferParams: { [K in keyof T]: ParametersExtractor<T[K]> };
    inferDependencies: { [K in keyof T]: DependenciesExtractor<T[K]> };
    inferResults: { [K in keyof T]: ResultExtractor<T[K]> };
}