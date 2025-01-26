import { Key } from './../../../node_modules/rc-tree/es/interface.d';
export interface SpecsCard {
    // Key: Key;
    id: string;
    title: string;
    cpu: string;
    ram: number;
    storage: number;
    activity: string; // This was used as `props.activity`
    user?: { address: string }; // This is optional based on your current data shape
  }
  