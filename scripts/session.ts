import { createClient } from "../src/replay/client";
import { Source } from "@replayio/protocol"
import fs from "fs"
const recordingId = "e2d6a019-bb06-444c-965b-e938add7fcbf";

const { client } = await createClient();
const { sessionId } = await client.Recording.createSession({ recordingId });



async function collectSources(client: any, sessionId: string): Promise<Source[]> {
  let sourceList: Source[] = [];

  client.Debugger.addNewSourceListener((source) => {
    sourceList.push(source);
  });

  client.Debugger.addNewSourcesListener(({ sources: sourcesList }) => {
    sourceList.push(...sourcesList);
  });

  await client.Debugger.findSources({}, sessionId);

  return sourceList;
}


type SourceLocation = {
  line: number;
  column: number;
};

function getTextBetweenLocations(
  text: string,
  start: SourceLocation,
  end: SourceLocation
): string {
  const lines = text.split('\n');

  if (start.line > end.line || (start.line === end.line && start.column > end.column)) {
    throw new Error("Start location must be before end location");
  }

  if (start.line === end.line) {
    return lines[start.line - 1].substring(start.column - 1, end.column - 1);
  }

  const result: string[] = [];
  result.push(lines[start.line - 1].substring(start.column - 1));

  for (let i = start.line; i < end.line - 1; i++) {
    result.push(lines[i]);
  }

  result.push(lines[end.line - 1].substring(0, end.column - 1));

  return result.join('\n');
}


const sourceList = await collectSources(client, sessionId);




const reactSources = (sourceList.filter((s) => s.url?.includes("React") && s.url?.includes("tsx")));

const firstSource = reactSources[0]
const text = await client.Debugger.getSourceContents({ sourceId: firstSource.sourceId }, sessionId)

const { lineLocations: locations } = await client.Debugger.getPossibleBreakpoints({ sourceId: firstSource.sourceId }, sessionId)

function firstLocation(sourceId: string, locations: any) {
  const line = locations[0].line;
  const column = locations[0].columns[0];
  return { sourceId, line, column }
}

function lastLocation(sourceId: string, locations: any) {
  const line = locations[locations.length - 1].line;
  const columns = locations[locations.length - 1].columns
  const column = columns[columns.length - 1];

  return { sourceId, line, column }
}

const firstMappedLocation = await client.Debugger.getMappedLocation({
  location: firstLocation(firstSource.sourceId, locations)
}, sessionId)

const lastMappedLocation = await client.Debugger.getMappedLocation({
  location: lastLocation(firstSource.sourceId, locations)
}, sessionId)


const firstGeneratedLocation = firstMappedLocation.mappedLocation[1]
const lastGeneratedLocation = lastMappedLocation.mappedLocation[1]

const generatedText = await client.Debugger.getSourceContents({ sourceId: 'pp29' }, sessionId)



const correspondingGeneratedText = getTextBetweenLocations(generatedText.contents, firstGeneratedLocation, lastGeneratedLocation);

fs.writeFileSync('./inputs/generated.tsx', generatedText.contents);

console.log(firstSource);
console.log(text.contents);
console.log(locations);
console.log(firstMappedLocation);
console.log(lastMappedLocation);
// console.log(generatedText.contents);
console.log(correspondingGeneratedText);
console.log(`sessionId: ${sessionId}`);

