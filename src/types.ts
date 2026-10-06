export type TaxRegime = 'PFAE' | 'RESICO' | 'MORAL' | 'INFORMAL';

export type BusinessNature = 'TECH' | 'AGENCY' | 'ECOMMERCE' | 'REAL_ESTATE';

export interface TacticalRoute {
  id: string;
  number: string;
  title: string;
  annualBenefit: number;
  description: string;
  legalBasis: string;
}

export interface SimulationInputs {
  regime: TaxRegime;
  monthlyRevenue: number;
  businessNature: BusinessNature;
  deductibleExpensePercent: number;
}

export interface SimulationResults {
  monthlyRevenue: number;
  annualRevenue: number;
  monthlyDeductions: number;
  annualDeductions: number;
  baseTaxMonthly: number;
  baseTaxAnnual: number;
  baseEffectiveRate: number;
  optimizedTaxMonthly: number;
  optimizedTaxAnnual: number;
  optimizedEffectiveRate: number;
  annualSavedLiquidity: number;
  routes: TacticalRoute[];
  warningMessage?: string;
  recommendationSummary: string;
}

export interface MarketTickerItem {
  symbol: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface BoutiqueProduct {
  id: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
  priceUSD: number;
  format: string;
  details: string[];
}
