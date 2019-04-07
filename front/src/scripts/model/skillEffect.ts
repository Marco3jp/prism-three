import {SkillTarget} from "@scripts/model/enum/skillTarget";
import PassiveTiming from "@scripts/model/passiveTiming";

export default class SkillEffect {
    private effectTarget: SkillTarget | undefined;
    private effectRatio: number | undefined;
    private passiveTiming: PassiveTiming | undefined;
}