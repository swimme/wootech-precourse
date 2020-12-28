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

  findSectionsByStation(stationName) {
    const allSections = this.findAllSections();

    const sectionsOfUpwardStation = allSections.filter((section) => {
      return section.upwardStation === stationName || section.upwardStation === stationName;
    });

    return sectionsOfUpwardStation;
  }

  findShortestDistancePath(departureStation, arrivalStation) {
    const dijkstra = new Dijkstra();
    const allSections = this.findAllSections();

    allSections.forEach((section) => {
      dijkstra.addEdge(section.upwardStation, section.downwardStation, section.distance);
    });

    const result = dijkstra.findShortestPath(departureStation, arrivalStation);
    return result;
  }
}
