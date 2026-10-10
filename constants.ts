import { ChartData } from './types';

export const PAPER_INFO = {
  title: "Upcycling Glycerol",
  subtitle: "Optimizing Pt-Fe/CeO₂ catalysts to convert biodiesel waste into high-value chemicals.",
  fullTitle: "Tuning Pt-Fe Ratio to Optimize the Catalytic Performance of CeO2-Supported Catalysts for Glycerol Oxidation",
  journal: "NHSJS",
  doi: "", // Accepted and published; DOI to be added.
  status: "Accepted and published; DOI to be added",
  authors: [
    { name: "Guowei Wang", affiliation: "The High School Affiliated to Beijing Normal University, Beijing, China", role: "First Author" },
    { name: "Ya Zhang", affiliation: "The High School Affiliated to Beijing Normal University, Beijing, China", role: "Second Author", email: "zhangya@bjsdfz.com" }
  ],
  keywords: ["Pt-Fe", "CeO₂", "Glycerol", "Oxidation", "Catalysis", "Green Chemistry"],
  abstract: "To explore the glycerol oxidation performance of Pt-Fe/CeO₂ catalysts, we prepared samples with varied Pt-Fe ratios. The optimal ratio showed enhanced activity, supporting high-value utilization of biodiesel byproduct glycerol. A Pt:Fe ratio of 1:1 yielded 85.6% conversion and 56.3% glyceric acid selectivity."
};

// Data from Table 1 in PDF
export const CONVERSION_DATA: ChartData[] = [
  { name: "0.5 : 1", value: 65.3, label: "Pt:Fe = 0.5:1" },
  { name: "1 : 1", value: 85.6, label: "Pt:Fe = 1:1 (Optimal)" },
  { name: "2 : 1", value: 72.8, label: "Pt:Fe = 2:1" },
];

// Data from Table 2 in PDF
export const SELECTIVITY_DATA = [
  { name: "Pt:Fe 0:1", glyceric: 35.2, dihydroxy: 32.8, glyoxal: 32.0 },
  { name: "Pt:Fe 1:2", glyceric: 43.7, dihydroxy: 29.1, glyoxal: 27.2 },
  { name: "Pt:Fe 1:1", glyceric: 56.3, dihydroxy: 23.1, glyoxal: 20.6 },
  { name: "Pt:Fe 2:1", glyceric: 47.8, dihydroxy: 26.9, glyoxal: 25.3 },
  { name: "Pt:Fe 1:0", glyceric: 38.4, dihydroxy: 31.0, glyoxal: 30.6 },
];
