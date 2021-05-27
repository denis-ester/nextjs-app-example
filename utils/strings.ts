export const toTitleCase = (input:string):string => input.split(/[\s_]+/).map(function(word) {
  return word.replace(word[0], word[0].toUpperCase());
}).join(' ')

export const locationFromUrlCase = (input:string):string => input.split('-').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');

export const formatPlatformPricingOption = (input:string):string => toTitleCase(input.replace(/^platform_/, ""))
