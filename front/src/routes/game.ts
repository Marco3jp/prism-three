import GameRoot from "@view/Game/GameRoot"
import Lobby from "@view/Lobby"
import InGame from "@view/Game/InGame"
import PostGame from "@view/Game/PostGame"
import inGame from "./inGame"
import {RouteConfig} from "vue-router";


let game: Array<RouteConfig> = [
    {
        path: "",
        component: GameRoot
    },
    {
        path: "lobby",
        component: Lobby
    },
    {
        path: "inGame",
        component: InGame,
        children: inGame,
    },
    {
        path: "postGame",
        component: PostGame,
    }
];

export default game;