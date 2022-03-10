import './style.css'
import {routing} from "./routing";
import {renderListView} from "./ListView";
import {renderDetailView} from "./DetailView";

routing({
    "/image-inflation/index.html": renderListView,
    "/detail": renderDetailView,
})



