import type {
  DailyRecord,
  PopulationRow,
  TransformRequest,
  TransformSeries,
  TransformSeriesContract
} from "../domain/covidData";
import { buildSeries, buildSeriesContract } from "./transforms";

export interface DataServiceInput {
  request: TransformRequest;
}

export interface FetchSeriesContractInput {
  request: TransformRequest;
  location: string;
}

export type DataServiceResult = TransformSeries;

export async function fetchSeries(input: DataServiceInput): Promise<DataServiceResult> {
  return buildSeries(input.request);
}

export async function fetchSeriesContract(
  input: FetchSeriesContractInput
): Promise<TransformSeriesContract> {
  return buildSeriesContract(input.request, input.location);
}

export const EMPTY_RECORDS: DailyRecord[] = [];
export const EMPTY_POPULATION: PopulationRow[] = [];

export const PHASE2_BASELINE_RECORDS: DailyRecord[] = [
  { date: "2020-01-01", fips: 10, cases: 10, deaths: 1 },
  { date: "2020-01-01", fips: 20, cases: 5, deaths: 0 },
  { date: "2020-01-02", fips: 10, cases: 20, deaths: 2 },
  { date: "2020-01-02", fips: 20, cases: 9, deaths: 1 },
  { date: "2020-01-03", fips: 10, cases: 35, deaths: 4 },
  { date: "2020-01-03", fips: 20, cases: 15, deaths: 2 }
];

export const PHASE2_BASELINE_POPULATION: PopulationRow[] = [
  { fips: 10, pop: 1000 },
  { fips: 20, pop: 500 }
];

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