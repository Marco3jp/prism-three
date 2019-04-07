import DuelRoot from "@view/Game/duel/DuelRoot"
import Operate from "@view/Game/duel/Operate"
import Animation from "@view/Game/duel/Animation"
import Result from "@view/Game/duel/Result"

import {RouteConfig} from "vue-router";

let duel: Array<RouteConfig> = [
    {
        path: "",
        component: DuelRoot
    },
    {
        path: "operate",
        component: Operate
    },
    {
        path: "animate",
        component: Animation,
    },
    {
        path: "result",
        component: Result
    }
];

export default duel;