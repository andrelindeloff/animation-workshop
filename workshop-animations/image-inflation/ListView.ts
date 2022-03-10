import {app, woodsImg} from "./util";
import {navigate} from "./routing";

const gotoDetailView = () => navigate("/detail")

// @ts-ignore
const runAnimation = async (event: MouseEvent): Promise<void> => {
    // TODO: Implement stuff
    event.currentTarget
}

export const renderListView = () => {
    app.innerHTML = `
    <ul class="list">
        <li class="card">
            <img class="top-img" src="${woodsImg}" />
            <h1>Test</h1>
        </li>
        <li class="card">
            <img class="top-img" src="${woodsImg}" />
            <h1>Sig</h1>    
        </li>
        <li class="card">
            <img class="top-img" src="${woodsImg}" />
            <h1>Andre</h1>
        </li>
    </ul>
`
    const cards: HTMLCollectionOf<Element> = app.getElementsByClassName("card")
    // @ts-ignore
    for(const card: HTMLDivElement of cards) {
        card.onclick = (event: MouseEvent) => {
            runAnimation(event)
                .then(() => gotoDetailView())
        }
    }
}