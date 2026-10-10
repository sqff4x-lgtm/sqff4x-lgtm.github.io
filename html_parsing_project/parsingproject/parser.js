const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const htmlDir = path.join(__dirname, "html");
const outputFile = path.join(__dirname, "parsed_data.json");

function parseFile(fileName) {
    const filePath = path.join(htmlDir, fileName);
    const html = fs.readFileSync(filePath, "utf8");
    const $ = cheerio.load(html);

    const body = $("body");
    const root = body.find("div").first();
    const cards = root.children("div");

    const items = [];

    cards.each((index, element) => {
        const card = $(element);
        const fields = [];

        card.find("*").addBack().each((i, node) => {
            const el = $(node);
            const tag = node.tagName;

            if (!tag) return;

            const attributes = {};
            for (const attr of Object.keys(node.attribs || {})) {
                attributes[attr] = el.attr(attr);
            }

            fields.push({
                tag: tag,
                classes: el.attr("class") || "",
                text: el.children().length === 0
                    ? el.text().trim()
                    : "",
                attributes: attributes
            });
        });

        items.push({
            tag: element.tagName,
            classes: card.attr("class") || "",
            attributes: card.attr() || {},
            fields: fields
        });
    });

    return {
        file: fileName,
        title: $("title").text().trim(),
        items: items
    };
}

function main() {
    if (!fs.existsSync(htmlDir)) {
        console.error("Не найдена папка html.");
        process.exit(1);
    }

    const files = fs.readdirSync(htmlDir)
        .filter(name => name.endsWith(".html"))
        .sort();

    const result = files.map(parseFile);

    fs.writeFileSync(
        outputFile,
        JSON.stringify(result, null, 2),
        "utf8"
    );

    console.log(`Обработано HTML-файлов: ${result.length}`);
    console.log(`Результат сохранён в ${outputFile}`);
}

main();