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
  'ľ',
  'm',
  'n',
  'ñ',
  'ŋ',
  'o',
  'ò',
  'p',
  'r',
  'ř',
  't',
  'u',
  'ù',
  'w',
  'x',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
