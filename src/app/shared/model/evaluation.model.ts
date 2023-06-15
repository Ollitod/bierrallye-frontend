import {IStationEvaluation} from './station-evaluation.model';

export interface IEvaluation {
  boxId: string;
  stationEvaluation: IStationEvaluation[];
  startTime: string;
  endTime: string;
  penalty: string;
  duration: string;
  finalTime: string;
}
