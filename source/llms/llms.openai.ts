import { LargeLanguageModel } from "./llms.interface";
import OpenAI from "openai";
import { Options } from "../types/options";


export class LargeLanguageModelOpenAI implements LargeLanguageModel {
    #openai: OpenAI;
    constructor() {
        this.#openai = new OpenAI({
            organization: null,
        });
    }
    async init(): Promise<void> {}
    async free(): Promise<void> {}
    async generate(prompt: string): Promise<Options<string>> {
        const completion = await this.#openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
        });

        return { success: true,
             value: completion.choices[0]?.message.content!, 
            };
    
    }
}