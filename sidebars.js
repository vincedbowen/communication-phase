/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'abstract',
    'introduction',
    'methodology',
    {
      type: 'category',
      label: 'Results',
      items: [
        {
          type: 'category',
          label: 'Patient Outcomes',
          items: [
            'results/patientOutcomes/mortality', 
            'results/patientOutcomes/lengthOfStay',
            'results/patientOutcomes/rateOfComplication',
            'results/patientOutcomes/longTermSurvive',
          ]
        }, 
        {
          type: 'category',
          label: 'Other Important Factors',
          items: [
            'results/otherFactors/cost',
            'results/otherFactors/usageTrends',
            'results/otherFactors/operationTime'
          ]
        }, 
      ]
    },
    'discussion',
    'conclusion'
  ],
};

export default sidebars;
