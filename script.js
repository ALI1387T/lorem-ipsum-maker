const persianButton = document.querySelector("#persian");
const englishButton = document.querySelector("#english");
const paragraphButton = document.querySelector("#paragraph");
const sentenceButton = document.querySelector("#sentence");
const wordButton = document.querySelector("#word");
const copy_button = document.querySelector(".copy_button");
const LoremTextAria = document.querySelector("#loremText")
const minusButton = document.querySelector("#minusbtn")
const plusButton = document.querySelector("#plusbtn")
const count = document.querySelector("#count")
const persianLoremText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
let persianLoremTextArray = [persianLoremText]
const englishLoremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet."
let englishLoremTextArray = [englishLoremText]
let LoremText = ""
let selectedLang = "fa";
let selectedLormType = "paragraph";

function arrayPush(array, pushArray, pushCount) {
    for (let i = 1; i < pushCount; i++) {
        array.push(pushArray)
    }
}
function persian() {
    persianButton.disabled = true;
    englishButton.disabled = false;
    selectedLang = "fa";
}
function english() {
    englishButton.disabled = true;
    persianButton.disabled = false;
    selectedLang = "en";
}
function loremType(e) {
    if (e.target.id == "paragraph") {
        paragraphButton.disabled = true;
        sentenceButton.disabled = false;
        wordButton.disabled = false;
        selectedLormType = "paragraph"
    } else if (e.target.id == "sentence") {
        sentenceButton.disabled = true;
        paragraphButton.disabled = false;
        wordButton.disabled = false;
        selectedLormType = "sentence"
    } else if (e.target.id == "word") {
        wordButton.disabled = true;
        paragraphButton.disabled = false;
        sentenceButton.disabled = false;
        selectedLormType = "word"
    }
}
function LoremMaker() {
    if (selectedLang == "fa") {
        LoremTextAria.innerHTML = persianLoremText
        LoremTextAria.dir = "rtl"
        if (selectedLormType == "paragraph") {
            if (Number(count.value) == 1) {
                LoremTextAria.innerHTML = persianLoremText
            } else {
                let paragraphCount = []
                for (let i = 0; i < Number(count.value); i++) {
                    paragraphCount.push(persianLoremText)
                }
                LoremTextAria.innerHTML = paragraphCount
            }
        } else if (selectedLormType == "sentence") {
            if (Number(count.value) > 14) {
                arrayPush(persianLoremTextArray, persianLoremText, 20)
            } else if (Number(count.value) < 14) {
                persianLoremTextArray = [persianLoremText]
            }
            let arrayPersianText = Array.from(persianLoremTextArray.toString().split(" ")).slice(0, Number(count.value) * 10).toString().replaceAll(",", " ")
            LoremTextAria.innerHTML = arrayPersianText
        } else if (selectedLormType == "word") {
            if (Number(count.value) >= 134) {
                arrayPush(persianLoremTextArray, persianLoremText, 20)
            } else if (Number(count.value) < 134) {
                persianLoremTextArray = [persianLoremText]
            }
            let arrayPersianText = Array.from(persianLoremTextArray.toString().split(" ")).slice(0, Number(count.value)).toString().replaceAll(",", " ")
            LoremTextAria.innerHTML = arrayPersianText
        }
    } else if (selectedLang == "en") {
        LoremTextAria.innerHTML = englishLoremText
        LoremTextAria.dir = "ltr"
        if (selectedLormType == "paragraph") {
            if (Number(count.value) == 1) {
                LoremTextAria.innerHTML = englishLoremText
            } else {
                let paragraphCount = []
                for (let i = 0; i < Number(count.value); i++) {
                    paragraphCount.push(englishLoremText)
                }
                LoremTextAria.innerHTML = paragraphCount
            }
        } else if (selectedLormType == "sentence") {
            if (Number(count.value) >= 16) {
                arrayPush(englishLoremTextArray, englishLoremText, 20)
            } else if (Number(count.value) < 16) {
                englishLoremTextArray = [englishLoremText]
            }
            let arrayEnglishText = Array.from(englishLoremTextArray.toString().split(" ")).slice(0, Number(count.value) * 10).toString().replaceAll(",", " ")
            LoremTextAria.innerHTML = arrayEnglishText
        } else if (selectedLormType == "word") {
            if (Number(count.value) >= 155) {
                arrayPush(englishLoremTextArray, englishLoremText, 20)
            } else if (Number(count.value) < 156) {
                englishLoremTextArray = [englishLoremText]
            }
            let arrayEnglishText = Array.from(englishLoremTextArray.toString().split(" ")).slice(0, Number(count.value)).toString().replaceAll(",", " ")
            LoremTextAria.innerHTML = arrayEnglishText
        }
    }
    if (Number(count.value) <= 0 && count.value != "") {
        LoremTextAria.innerHTML = "error"
    }
}
function plusAndMinus(event) {
    if (event.target.innerHTML == "+") {
        count.value = Number(count.value) + 1
    } else if (event.target.innerHTML == "-") {
        if (count.value != "1") {
            count.value = Number(count.value) - 1
        }
    }
}
function copy() {
    navigator.clipboard.writeText(LoremTextAria.innerHTML)
    copy_button.innerHTML = "کپی شد"
    copy_button.style.backgroundColor = "#ff5050"
    setTimeout(() => {
        copy_button.innerHTML = "کپی کن"
        copy_button.style.backgroundColor = "rgba(240, 136, 66, 0.582)"
    }, 1500)
}

paragraphButton.disabled = true;
persianButton.disabled = true;
persianButton.addEventListener("click", persian)
englishButton.addEventListener("click", english)
paragraphButton.addEventListener("click", (e) => loremType(e))
sentenceButton.addEventListener("click", (e) => loremType(e))
wordButton.addEventListener("click", (e) => loremType(e))
plusButton.addEventListener("click", (e) => plusAndMinus(e))
minusButton.addEventListener("click", (e) => plusAndMinus(e))
copy_button.addEventListener("click", copy)
window.addEventListener("click", LoremMaker)
count.addEventListener("input", LoremMaker)