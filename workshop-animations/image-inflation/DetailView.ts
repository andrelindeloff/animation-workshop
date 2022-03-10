import {navigate} from "./routing";
import {app, woodsImg} from "./util";

const gotoListView = () => navigate("/image-inflation/index.html")

export const renderDetailView = () => {
    app.innerHTML = `
    <div class="fullscreen card">
        <img class="top-img" src="${woodsImg}" />
        <div>
            <button id="backButton">X</button>
            <h1>Sig</h1>    
        </div>
    </div>
    `
    // @ts-ignore
    document.querySelector("#backButton").onclick = gotoListView
}