import { OlympusPlugin } from "interfaces";
import { OlympusApp } from "olympusapp";
import { ServerManager } from "server/servermanager";


// Couldn't get the import from "constants/constants" working
const MISSION_URI = "mission";


export class AutoLoginPlugin implements OlympusPlugin {
    /**
     * Initialize the auto login plugin.
     * 
     * @param app <OlympusApp>
     * @returns boolean on success/fail
     */
    initialize(app: OlympusApp): boolean {
        const serverManager = app.getServerManager() as ServerManager;

        // Delay the auto login so that the server address is able to be set.
        setTimeout(() => this.tryAutoLogin(serverManager), 0);

        return true;
    }

    tryAutoLogin(serverManager: ServerManager) {
        // If this request completes successfully, then a couple things happen to complete the login process:
        // - The server manager sets connected status to true, hiding the login splash page
        // - `startUpdate()` is called via the success callback, starting the web client's polling of mission state
        serverManager.GET(() => { serverManager.startUpdate(); }, MISSION_URI, undefined, 'text', true);
    }

    getName(): string {
        return "Auto Login Plugin";
    }
}
