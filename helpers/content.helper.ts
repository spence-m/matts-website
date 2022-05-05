import showdown from "showdown";
import path from "path";
import fs from "fs";

const fsPromises = fs.promises;
const converter = new showdown.Converter({ noHeaderId: true });

export async function getResumeContent() {
    let content = "";
    try {
        const fileContents = (
            await fsPromises.readFile(
                path.join(process.cwd(), "markdown/matt-resume.md")
            )
        ).toString();
        content = converter.makeHtml(fileContents);
    } catch (e) {
        console.error(e);
    }

    return content;
}
