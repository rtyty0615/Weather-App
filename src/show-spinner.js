import { displayIcon } from "./display-icon.js";


export function showSpinner(status){
    const main = document.querySelector("#main");
    main.textContent = "";
    const content = document.createElement("div");
    content.id = "content";
    if (status){
        const icon = document.createElement("img");
        icon.id = "weather-icon";
        icon.alt = "Loading";
        displayIcon("fog-day");
        const loadingMessage = document.createElement("h3");
        loadingMessage.id = "loading";
        loadingMessage.textContent = "Loading...";
        content.append(loadingMessage, icon);
        main.append(content);
    } 
}