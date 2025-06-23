export  interface TempModelData {
    data: TempModelDataContent;
    id: string;
};

export interface TempModelDataContent {
    humidity: number;
    temperature: number;
};