import {SkillType} from "@scripts/model/enum/skillType";
import {SkillGrade} from "@scripts/model/enum/skillGrade";
import SkillEffect from "@scripts/model/skillEffect";

export default class Skill {
    private _skillName: string | undefined; // スキル名
    private _skillType: SkillType | undefined; // スキルのタイプ、いつ発動できるか
    private _skillGrade: SkillGrade | undefined; // 別になくてもいいけど……
    private _skillCost: number | undefined; // spの消費量ですね
    private _skillEffect: SkillEffect | undefined; // スキルの効果対象・倍率など
    private _skillLevel: number | undefined; // スキルレベル(今は効果ない)

    constructor(skillName: string | undefined, skillType: SkillType | undefined, skillGrade: SkillGrade | undefined, skillCost: number | undefined, skillEffect: SkillEffect | undefined, skillLevel: number | undefined) {
        this._skillName = skillName;
        this._skillType = skillType;
        this._skillGrade = skillGrade;
        this._skillCost = skillCost;
        this._skillEffect = skillEffect;
        this._skillLevel = skillLevel;
    }

    get skillName(): string | undefined {
        return this._skillName;
    }

    set skillName(value: string | undefined) {
        this._skillName = value;
    }

    get skillType(): SkillType | undefined {
        return this._skillType;
    }

    set skillType(value: SkillType | undefined) {
        this._skillType = value;
    }

    get skillGrade(): SkillGrade | undefined {
        return this._skillGrade;
    }

    set skillGrade(value: SkillGrade | undefined) {
        this._skillGrade = value;
    }

    get skillCost(): number | undefined {
        return this._skillCost;
    }

    set skillCost(value: number | undefined) {
        this._skillCost = value;
    }

    get skillEffect(): SkillEffect | undefined {
        return this._skillEffect;
    }

    set skillEffect(value: SkillEffect | undefined) {
        this._skillEffect = value;
    }

    get skillLevel(): number | undefined {
        return this._skillLevel;
    }

    set skillLevel(value: number | undefined) {
        this._skillLevel = value;
    }
}