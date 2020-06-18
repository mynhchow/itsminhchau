let color = ["blue", "coralpink","black","orange","brown","green","violet","yellow"]
let pallete = document.getElementById("palette")
let mainBox = document.getElementById("main-box")
let result = document.getElementById("result")
for (let i=0; i<colors.length; i++) {
    let element = document.createElement("div")
    let classAttribute = document.createAttribute("class")
    classAttribute.value = "palette-color"
    element.getAttributeNode(classAttribute)
    element.style.backgroundColor = colors[i]
    element.addEventListener("click", addColorToBox)
function addcolortobox() {
 mainBox.style.backgroundColor
 if (colors[i] == "pink") {
     result.innerText = "You won"
 }
}
palette.appendChild(element)
}