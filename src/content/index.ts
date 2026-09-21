import { en } from "./en";
import { fa } from "./fa";
import type { Content, Locale } from "./types";

export type {
  Content,
  Experience,
  Locale,
  Project,
  Theme,
  UiCopy,
} from "./types";

const catalog: Record<Locale, Content> = { en, fa };

export function getContent(locale: Locale): Content {
  return catalog[locale];
}
