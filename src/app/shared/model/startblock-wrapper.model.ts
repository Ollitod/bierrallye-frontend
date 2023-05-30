import {IStartblock} from './startblock.model';

export interface IStartblockWrapper {
  startblocks: IStartblock[];
  availableSpots: number;
}
