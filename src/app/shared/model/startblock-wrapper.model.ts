import {IStartblock} from './startblock.model';

export interface IStartblockWrapper {
  startblocks: IStartblock[];
  totalSpots: number;
  availableSpots: number;
}
