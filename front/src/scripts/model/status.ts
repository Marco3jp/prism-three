import {RunningType} from "@scripts/model/enum/runningType";
import {GrowthType} from "@scripts/model/enum/growthType";

export default class Status {
    private _level: number | undefined;
    private _kick: number | undefined;
    private _body: number | undefined;
    private _speed: number | undefined;
    private _technique: number | undefined;
    private _guard: number | undefined;
    private _stamina: number | undefined;
    private _skillPoint: number | undefined;
    private _runningType: RunningType | undefined;
    private _growthType: GrowthType | undefined;

    constructor(level: number | undefined, kick: number | undefined, body: number | undefined, speed: number | undefined, technique: number | undefined, guard: number | undefined, stamina: number | undefined, skillPoint: number | undefined, runningType: RunningType | undefined, growthType: GrowthType | undefined) {
        this._level = level;
        this._kick = kick;
        this._body = body;
        this._speed = speed;
        this._technique = technique;
        this._guard = guard;
        this._stamina = stamina;
        this._skillPoint = skillPoint;
        this._runningType = runningType;
        this._growthType = growthType;
    }

    get level(): number | undefined {
        return this._level;
    }

    set level(value: number | undefined) {
        this._level = value;
    }

    get kick(): number | undefined {
        return this._kick;
    }

    set kick(value: number | undefined) {
        this._kick = value;
    }

    get body(): number | undefined {
        return this._body;
    }

    set body(value: number | undefined) {
        this._body = value;
    }

    get speed(): number | undefined {
        return this._speed;
    }

    set speed(value: number | undefined) {
        this._speed = value;
    }

    get technique(): number | undefined {
        return this._technique;
    }

    set technique(value: number | undefined) {
        this._technique = value;
    }

    get guard(): number | undefined {
        return this._guard;
    }

    set guard(value: number | undefined) {
        this._guard = value;
    }

    get stamina(): number | undefined {
        return this._stamina;
    }

    set stamina(value: number | undefined) {
        this._stamina = value;
    }

    get skillPoint(): number | undefined {
        return this._skillPoint;
    }

    set skillPoint(value: number | undefined) {
        this._skillPoint = value;
    }

    get runningType(): RunningType | undefined {
        return this._runningType;
    }

    set runningType(value: RunningType | undefined) {
        this._runningType = value;
    }

    get growthType(): GrowthType | undefined {
        return this._growthType;
    }

    set growthType(value: GrowthType | undefined) {
        this._growthType = value;
    }
}