import Status from "@scripts/model/status";
import Skill from "@scripts/model/skill";

export default class Character {
    constructor(name: string | undefined, status: Status | undefined, skills: Array<Skill> | undefined) {
        this._name = name;
        this._status = status;
        this._skills = skills;
    }
    private _name: string | undefined;
    private _status: Status | undefined;
    private _skills: Array<Skill> | undefined;

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }

    get status(): Status | undefined {
        return this._status;
    }

    set status(value: Status | undefined) {
        this._status = value;
    }

    get skills(): Array<Skill> | undefined {
        return this._skills;
    }

    set skills(value: Array<Skill> | undefined) {
        this._skills = value;
    }
}