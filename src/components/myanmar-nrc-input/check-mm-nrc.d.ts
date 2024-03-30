
declare module "check-mm-nrc" {
    export interface NRC{
        id: string,
        name_en: string,
        name_mm: string,
        nrc_code: string,
        created_at: string,
        updated_at: string
    }
    export function getStates(): number[];
    export function checkMyanmarNRC(nrc: string): void;
    export function getNRCTownshipByState(state: string): NRC[];
    export const MyanmarCitizenShortType: string[];
}
