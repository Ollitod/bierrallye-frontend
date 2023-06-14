import {IStationEvaluation} from './station-evaluation.model';

export interface IEvaluation {
  boxId: string;
  stationEvaluation: IStationEvaluation[];
  startTime: string;
  endTime: string;
  penalty: number;
  duration: number;
  finalTime: number;
}
