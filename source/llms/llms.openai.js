"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeLanguageModelOpenAI = void 0;
const openai_1 = __importDefault(require("openai"));
class LargeLanguageModelOpenAI {
    #openai;
    constructor() {
        this.#openai = new openai_1.default({
            organization: null,
        });
    }
    async init() { }
    async free() { }
    async generate(prompt) {
        const completion = await this.#openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
        });
        return { success: true,
            value: completion.choices[0]?.message.content,
        };
    }
}
exports.LargeLanguageModelOpenAI = LargeLanguageModelOpenAI;
