export async function displayIcon(weatherCondition) {
    try {
        const iconModule = await import(`./icons/${weatherCondition}.svg`);
        const iconUrl = iconModule.default;
        document.querySelector("#weather-icon").src = iconUrl;
    } catch (err) {
        console.error("Icon not found", err);
    }
}