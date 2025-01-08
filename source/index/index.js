"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const llms_openai_1 = require("../llms/llms.openai");
const get_auth_1 = require("../auth/get.auth");
async function main() {
    const auth = (0, get_auth_1.getAuth)();
    console.log(auth);
    console.log("Hello World");
    const llm = new llms_openai_1.LargeLanguageModelOpenAI();
    const result = await llm.generate("Hello, how are you?");
    console.log(result);
    while (true) {
    }
}
setImmediate(main);
