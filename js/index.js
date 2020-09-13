const toggleBtn = document.querySelector(".toggle")
const nav = document.querySelector(".nav_bar")
const footer = document.querySelector("footer")
const sections = document.querySelectorAll(".section_wrapper section")
const anchor = document.querySelectorAll(".timeline_bar a")
const textWrap = document.querySelectorAll(".text_content .text")






function scrollAppear() {

    textWrap.forEach(target => {
        console.log(target)

        window.addEventListener("scroll", function() {
            let screenPos = window.innerHeight;
            const pos = target.getBoundingClientRect().top;

            if (pos < screenPos) {
                target.classList.add("text_appear")

            }
        })
    })
}

function hoverhandler() {

    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            const id = this.getAttribute("id")
            const navActive = document.querySelector(`a[href="#${id}"]`)
            anchor.forEach(link => link.classList.remove("active"))
            navActive.classList.add("active")
        })
    })
}

function handleToggle() {
    nav.classList.toggle("nav_active")
    footer.classList.toggle("footer_active")

}

function init() {
    toggleBtn.addEventListener("click", handleToggle)
    hoverhandler()
    scrollAppear()
}

init()