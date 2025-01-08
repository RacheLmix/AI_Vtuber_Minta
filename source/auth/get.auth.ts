import * as fs from "fs";
import * as path from "path";

export function getAuth() :Record<string, string> {
    const PATH = path.join(process.cwd(), ".env");
    const file_content = fs.readFileSync(PATH, { encoding: "utf-8" });
    const file_line :string[] = file_content.split(/\r\n|\n/g);
   let result: Record<string, string> = {};
   for (const line of file_line) {
    const trimmed_line = line.trim();
    if (trimmed_line.length === 0) continue;
    const split_line = trimmed_line.split("=");
    if (split_line.length < 2) {
        console.error("Cloud not parse line: " + line);
    }
    result[split_line[0]!] = split_line.join("=");
   }
   return result;
}