import { AutoLoginPlugin } from "./autologinplugin";

globalThis.getOlympusPlugin = () => {
    return new AutoLoginPlugin();
}