import { DynamicConfig } from 'src/app/core/interfaces/IDynamicConfig';

export interface ConfigMaid extends DynamicConfig {
   smallSize: number; 
   mediumSize: number;
   largeSize: number;
   smallValue: number;
   mediumValue: number;
   largeValue: number;
   cleaningLight: number;
   cleaningNormal: number;
   cleaningHeavy: number;
}