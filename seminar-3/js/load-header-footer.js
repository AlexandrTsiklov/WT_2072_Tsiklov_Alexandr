document.addEventListener("DOMContentLoaded", () => {
    let header = document.createElement("header")
    header.setAttribute("class", "container-width-80 header")
    header.innerHTML = `
        <ul class="header-list">
            <ui class="header-list-ui">Alexandr Tsiklov</ui>
            <ui class="header-list-ui">adr.tsiklov@mail.ru</ui>
            <ui class="header-list-ui">+7(977)301-01-31</ui>
        </ul>
    `
    document.querySelector("body")?.prepend(header)

    let footer = document.createElement("footer")
    footer.setAttribute("class", "container-width-80 footer")
    footer.innerHTML = `
        <div class="footer-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, eveniet itaque provident.
        </div>
    `
    document.querySelector("body")?.append(footer)
})