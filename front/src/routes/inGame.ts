import InGameRoot from "@view/Game/InGameRoot"
import Core from "@view/Game/Core"
import Duel from "@view/Game/duel/Duel"
import {RouteConfig} from "vue-router";
import duel from "./duel";

let game: Array<RouteConfig> = [
    {
        path: "",
        component: InGameRoot
    },
    {
        path: "core",
        component: Core
    },
    {
        path: "duel",
        component: Duel,
        children: duel
    },
];

export default game;