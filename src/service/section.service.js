import { lines } from "../data/line.js";
import Dijkstra from "../utils/Dijkstra.js";

export default class SectionService {
  constructor() {
    this.lines = lines;
  }

  findAllSections() {
    const sections = [];
    for (let line of lines) {
      sections.push(...line.sections);
    }

    return sections;
  }

  findShortestPath(departureStation, arrivalStation, option) {
    const dijkstra = new Dijkstra();
    const allSections = this.findAllSections();

    allSections.forEach((section) => {
      dijkstra.addEdge(section.upwardStation, section.downwardStation, section[option]);
    });

    const shortestPath = dijkstra.findShortestPath(departureStation, arrivalStation);
    return shortestPath;
  }

  findSectionByStations(departureStation, arrivalStation) {
    const allSections = this.findAllSections();

    const section = allSections.filter((section) => {
      return (
        (section.upwardStation === departureStation &&
          section.downwardStation === arrivalStation) ||
        (section.upwardStation === arrivalStation && section.downwardStation === departureStation)
      );
    });

    return section;
  }

  getPathDistance(sectionNames) {
    let totalDistance = 0;

    for (let i = 0; i < sectionNames.length - 1; i++) {
      const section = this.findSectionByStations(sectionNames[i], sectionNames[i + 1]);
      totalDistance += section[0].distance;
    }

    return totalDistance;
  }

  getPathTime(sectionNames) {
    let totalTime = 0;

    for (let i = 0; i < sectionNames.length - 1; i++) {
      const section = this.findSectionByStations(sectionNames[i], sectionNames[i + 1]);
      totalTime += section[0].time;
    }

    return totalTime;
  }
}
