import type {
  DailyRecord,
  PopulationRow,
  TransformRequest,
  TransformSeries
} from "../domain/covidData";
import { buildSeries } from "./transforms";

export interface DataServiceInput {
  request: TransformRequest;
}

export type DataServiceResult = TransformSeries;

export async function fetchSeries(input: DataServiceInput): Promise<DataServiceResult> {
  return buildSeries(input.request);
}

export const EMPTY_RECORDS: DailyRecord[] = [];
export const EMPTY_POPULATION: PopulationRow[] = [];

export function createEmptyTransformRequest(): TransformRequest {
  return {
    records: EMPTY_RECORDS,
    selectedFips: [],
    population: EMPTY_POPULATION,
    metricType: "cases",
    valueMode: "diff",
    rollingDays: 7,
    normalizeByPopulation: true,
  };
}

export async function fetchEmptySeries(): Promise<DataServiceResult> {
  return fetchSeries({ request: createEmptyTransformRequest() });
}