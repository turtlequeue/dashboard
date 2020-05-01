import * as _ from 'lodash'

function filterDuplicates(arr: string[]) {
  return arr.filter((el, index, self) => self.indexOf(el) === index);
}

function fixLowercaseProperties(arr: string[]) {
  return arr.map((el) => {
    if (
      !el
      || el.indexOf('-') === -1
      || el.toLowerCase() !== el
    ) {
      return el;
    }

    const splitEl = el.split('-');
    return `${splitEl[0]}-${splitEl[1].toUpperCase()}`;
  });
}

function getUserLocalesList() {
  let candidates: string[] = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      candidates = candidates.concat(window.navigator.languages);
    }
    if (window.navigator.language) {
      candidates.push(window.navigator.language);
    }
  }

  candidates.push('en-US');

  return fixLowercaseProperties(filterDuplicates(candidates));
}

export const getUserLocales = _.once(() => {
  return getUserLocalesList();
});

export const getLocale = _.once(() => {
  return getUserLocales()[0];
});

export default getLocale;