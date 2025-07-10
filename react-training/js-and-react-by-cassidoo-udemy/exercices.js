export function getElementsByAttributes(attribute, value) {
    const allHtmlElements = document.getElementsByTagName("*");
    let found = [];

    for (let i = 0; i < allHtmlElements.length; i++) {
        if (allHtmlElements[i].getAttribute(attribute) === value) {
            found.push(allHtmlElements[i]);
        }
    }
    return found;
}
