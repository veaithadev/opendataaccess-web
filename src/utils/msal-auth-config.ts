import { Configuration } from "@azure/msal-browser";
import { LogLevel } from "@azure/msal-browser";
import { environment } from "../environments/environment";

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginGraphApiRequest = {
    scopes: [
        "https://graph.microsoft.com/.default"
    ]
};

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: environment.ODAWebClientId,
        authority: environment.authority,
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        // Flag - Need to convert to an app log
                        // console.error(message);
                        return;
                    case LogLevel.Info:
                        // Flag - Need to convert to an app log
                        // console.info(message);
                        return;
                    case LogLevel.Verbose:
                        // Flag - Need to convert to an app log
                        // console.debug(message);
                        return;
                    case LogLevel.Warning:
                        // Flag - Need to convert to an app log
                        // console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

export const loginODAApiRequest = {
    scopes: [
        environment.ODAApiAudience   ]
};
