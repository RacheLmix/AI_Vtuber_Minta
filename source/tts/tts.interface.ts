import { Module } from "../module/module.interface";

export interface TextToSpeech extends Module {
    generate(): Promise<void>;
    play(): Promise<void>;
}