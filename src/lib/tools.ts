export const goto = async (url: string) => {
    const pageFetch = await fetch(url),
    page = new DOMParser().parseFromString(await pageFetch.text(), "text/html");;

    window.history.pushState({}, page.title, url);

    document.getElementsByTagName("main")[0].innerHTML = page.getElementsByTagName("main")[0].innerHTML

    document.getElementsByTagName("head")[0].replaceChildren(...page.getElementsByTagName("head")[0].childNodes)
}