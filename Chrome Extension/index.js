document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let tab = tabs[0]
        let url = tab.url.split("#:~:text=")[0]
        let button = document.getElementsByTagName("button")[0]
        button.addEventListener("click", () => {
            let text = document.getElementsByTagName("textarea")[0].value
            if (text.length == 0) {
                return
            }
            url = `${url}#:~:text=${text}`
            navigator.clipboard.writeText(url)
            document.getElementsByTagName("h1")[0].style.display = "block"
        })
    })
})