interface Diagnostic {
    name: string;
    code: string;
  }
  
interface OTC {
    name: string;
    type: string;
    dose: string;
    frequency: string;
  }
  
interface RxRecommendation {
    name: string;
    type: string;
    dose: string;
    instruction: string;
}
  
interface VisitIntake {
    title: string;
    value: string | number;
  }
  
interface MiraData {
    summary: string;
    diagnostic: Diagnostic[];
    selfCareTips: string;
    OTC: OTC[];
    miraCareOptions: any[];
    miraOSsummary: {
    triageLevel: string[];
    chiefComplaint: string;
    dx: { diagnosis: string; probability: string; ICD10CMCode: string }[];
    reasonsForDx: string;
    conditionCategory: string;
    rxRecommendation: RxRecommendation[];
    rxExplanation: string;
};
    visitIntake: VisitIntake[];
}
