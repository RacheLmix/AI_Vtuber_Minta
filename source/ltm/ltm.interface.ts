import { Module } from "../module/module.interface";

export interface LargeLanguageModel extends Module {
    query(): Promise<void>;
    store(): Promise<void>;
}