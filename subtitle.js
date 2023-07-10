const fs = require("fs");

function stripHtmlTags(text) {
  return text.replace(/<[^>]+>/g, "");
}

function parseSubtitleData(subtitleFile) {
  const data = fs.readFileSync(subtitleFile, "utf8");
  const lines = data.split("\n");

  const subtitles = [];
  let currentIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      continue;
    }

    if (line.match(/^\d+$/)) {
      currentIndex = parseInt(line);
    } else if (line.match(/^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/)) {
      const timestamp = line;
      const text = lines[i + 1].trim();
      const styledText = text.replace(/<font\s+color=(#[A-Fa-f0-9]{8})>(.*?)<\/font>/g, '<span style="color: $1">$2</span>');
      // const textWithoutTags = stripHtmlTags(text);

      const subtitle = {
        index: currentIndex,
        timestamp: timestamp,
        text: styledText.replace(/"/g, "'"),
      };

      subtitles.push(subtitle);

      i++; // Skip the next line since it contains the subtitle text
    }
  }

  return subtitles;
}

function saveDataAsJson(data, outputFile) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(outputFile, jsonData);
  console.log(`Data saved as JSON file: ${outputFile}`);
}
// Example usage:
const subtitleFile = "1.srt";
const outputFile = "subtitle.json";
const extractedData = parseSubtitleData(subtitleFile);
saveDataAsJson(extractedData, outputFile);
