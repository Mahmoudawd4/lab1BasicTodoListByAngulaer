import { BatteryManager } from "./BatteryManager";

export  interface Navigator {
   getBattery: () => Promise<BatteryManager>;
}
