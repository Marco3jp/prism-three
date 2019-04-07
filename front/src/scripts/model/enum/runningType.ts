export enum RunningType {
    SHORT_DISTANCE, // 短距離が得意、長い距離だとスタミナ消費が多い
    MIDDLE_DISTANCE, // 中距離が得意、大体距離に比例したスタミナを消費する
    LONG_DISTANCE, // 長距離が得意、短距離と長距離のスタミナ消費差が少ない
}