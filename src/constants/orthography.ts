import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'à',
  'c',
  'd',
  'e',
  'è',
  'h',
  'i',
  'ì',
  'k',
  'l',
  'm',
  'n',
  'o',
  'ò',
  'p',
  'r',
  't',
  'u',
  'ù',
  'w',
  'x',
  'y',
  'ñ',
  'ľ',
  'ŋ',
  'ř'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
