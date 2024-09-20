export interface QuestionEntity{
    id: number | null,
    title: string,
    description: string,
    languageTypeList: string,
    level: number,
    inputExample: string,
    outputExample: string,
    tips: string | null,
    advance: string | null,
    testCase: string,
    valCase: string,
    tagList: number[] | null,
    templateList: QuestionTemplateEntity[]
};

export interface TagEntity{
    id: number,
    tagName: string
};

export interface QuestionTemplateEntity{
    id: number | null,
    qid: number | null,
    languageType: number | null,
    timeLimit: number | null,
    memLimit: number | null,
    templatePref: string | null,
    templateMid: string | null,
    templateRear: string | null
};