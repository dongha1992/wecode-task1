const toggleBtn = document.querySelector(".toggle")
const nav = document.querySelector(".nav_bar")
const footer = document.querySelector("footer")
const sections = document.querySelectorAll(".section_wrapper section")
const anchor = document.querySelectorAll(".timeline_bar a")
const textWrap = document.querySelectorAll(".text_content .text")
const aboutMe = document.querySelector(".aboutme-typing")

const texts = ["김동하 입니다.", "작가입니다.", "슈퍼 프리랜서를 꿈꿉니다.", "다정한 유용함을 좋아합니다."]

let cnt = 0;
let index = 0;
let currentText = "";
let letter = ""

function type() {
    if (cnt === texts.length) {
        cnt = 0
    }
    currentText = texts[cnt]
    letter = currentText.slice(0, index++)
    aboutMe.textContent = letter
    if (letter.length === currentText.length) {
        cnt++
        index = 0;
    }
    setTimeout(type, 600)
}

type()





function scrollAppear() {

    textWrap.forEach(target => {

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