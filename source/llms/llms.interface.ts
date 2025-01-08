import { Module } from "../module/module.interface";
import { Options } from "../types/options";

export interface LargeLanguageModel extends Module {
    generate(prompt: string): Promise<Options<string>>;
}