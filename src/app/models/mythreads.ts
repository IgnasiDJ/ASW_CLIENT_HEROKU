import { IContribution } from './contribucion';
import { Comentari } from './comentari';

export interface IMythreads {
    contributions: IContribution[];
    comentaris:Comentari[];
}
