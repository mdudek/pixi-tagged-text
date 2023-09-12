import { Nested } from "./types";
type Predicate<T> = (t: T) => boolean;
export declare const combineRecords: <A extends Record<string, unknown>, B extends Record<string, unknown> = A>(a: A, b: B) => A & B;
export declare const first: <T>(a: T[]) => T;
export declare const last: <T>(a: T[]) => T;
export declare const isDefined: Predicate<unknown | undefined>;
export declare const complement: <T>(predicate: Predicate<T>) => (input: T) => boolean;
export declare const pluck: <T, U>(key: keyof U) => (objects: U[]) => T[];
export declare const assoc: <T extends Record<string, U>, U>(key: keyof T) => (value: U) => (object: T) => T;
export declare const mapProp: <T, U>(k: keyof U) => (f: (t: T) => T) => (o: U) => U;
export declare const flatReduce: <T, U>(f: (acc: U, t: T) => U, acc: U) => (nested: Nested<T>) => U;
type FlatReduceRetrun<T, U> = (nested: Nested<T>) => U;
export declare const flatEvery: <T>(p: Predicate<T>) => FlatReduceRetrun<T, boolean>;
export declare const nestedMap: <T, U>(f: (t: T) => U) => (nested: Nested<T>) => Nested<U>;
export declare const countIf: <T>(p: Predicate<T>) => (a: T[]) => number;
export type Unary<Param, Return> = (p: Param) => Return;
export {};
