"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.proper = exports.P = exports.n = exports.parse = exports.removeDuplicates = void 0;
function removeDuplicates(set) {
    if (!Array.isArray(set))
        throw new Error('invalid form of set!');
    return set.filter((x, i) => set.indexOf(x) === i);
}
exports.removeDuplicates = removeDuplicates;
;
function parse(set) {
    if (!Array.isArray(set))
        throw new Error('invalid form of set!');
    return removeDuplicates(set);
}
exports.parse = parse;
;
function n(set) {
    return parse(set).length;
}
exports.n = n;
;
function P(set) {
    return parse(set).reduce((subsets, value) => subsets.concat(subsets.map((x) => [value, ...x])), [[]]);
}
exports.P = P;
;
function proper(set) {
    return parse(set).filter(x => Array.isArray(x) ? x.length : x);
}
exports.proper = proper;
;
function stringify(set) {
    let content = [];
    parse(set).forEach(x => {
        switch (typeof x) {
            case 'number':
                content.push(x.toString());
                break;
            case 'boolean':
                content.push(x.toString());
                break;
            case 'object':
                content.push(Array.isArray(x) ? stringify(x) : JSON.stringify(x));
                break;
            default: content.push(JSON.stringify(x.toString()));
        }
    });
    return `{ ${content.join(', ')} }`;
}
exports.stringify = stringify;
;
