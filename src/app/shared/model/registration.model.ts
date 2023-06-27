export interface IRegistration {
  player1: string;
  player2: string;
  drink1: number;
  drink2: number;
  startblock: number;
  email: string;
  uuid?: string;
  dsgvoApproved: boolean;
  active?: boolean;
  hasTeam?: boolean
}
