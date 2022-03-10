import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const imgUrl = "https://www.w3schools.com/howto/img_avatar.png"
const imgUrl2 = "https://www.w3schools.com/howto/img_avatar2.png"

const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
const loadImage = async (imageNumber: number) => {
    await wait(imageNumber * 1000)
    const container = document.querySelector("#img-container-" + imageNumber)
    const imgTag = document.createElement("img")
    imgTag.src = imageNumber % 2 === 0 ? imgUrl : imgUrl2
    if (!container) throw Error(":(")
    container.textContent = ""
    container.appendChild(imgTag)
}

[1,2,3,4,5,6,7,8,9,10].forEach((image) => {
    loadImage(image)
})

const Img = (number: number) => `
    <div class="card">
        <div id="img-container-${number}">
            Laster ...
        </div>
        <h1>Slow Joe</h1>
        <p>Lead interior engineer</p>
    </div>
`

app.innerHTML = `
  ${[1,2,3,4,5,6,7,8,9,10].map(imgNumber => Img(imgNumber))}
`
