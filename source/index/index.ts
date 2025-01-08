import { LargeLanguageModelOpenAI } from "../llms/llms.openai";
import { LargeLanguageModel } from "../llms/llms.interface";
import { getAuth } from "../auth/get.auth";
async function main() :Promise<void> {
    const auth = getAuth();
    console.log(auth);
    console.log("Hello World");
    const llm : LargeLanguageModel = new LargeLanguageModelOpenAI();
    const result = await llm.generate("Hello, how are you?");
    console.log(result);
    while (true) {

    }
}

setImmediate(main);