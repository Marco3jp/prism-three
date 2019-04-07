export enum SkillGrade {
    S,
    A,
    B,
    C,
}

export class SkillGradeModel {
    public static toString(skillGrade: SkillGrade): string {
        switch (skillGrade) {
            case SkillGrade.S:
                return "S";
            case SkillGrade.A:
                return "A";
            case SkillGrade.B:
                return "B";
            case SkillGrade.C:
                return "C";
        }
    }
}