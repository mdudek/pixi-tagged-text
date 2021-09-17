import { BaseTexture, Texture } from "@pixi/core";
import { Rectangle as PixiRectangle } from "@pixi/math";
import { Sprite } from "@pixi/sprite";
import { TextStyle as PixiTextStyle } from "@pixi/text";
import { complement, flatEvery } from "./functionalUtils";

///// GENERAL PURPOSE

export type Point = {
  x: number;
  y: number;
};
export type Rectangle = Point & {
  width: number;
  height: number;
};

export interface IFontMetrics {
  ascent: number;
  descent: number;
  fontSize: number;
}

export type Bounds = Rectangle;

export type Nested<T> = T | Array<Nested<T>>;

///// OPTIONS

export type SpriteSource =
  | string
  | Texture
  | HTMLCanvasElement
  | HTMLVideoElement;

export type TextureSource =
  | string
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | BaseTexture;

export type ImageSource = Sprite | SpriteSource | TextureSource;

export const isSpriteSource = (s: ImageSource): s is SpriteSource =>
  typeof s === "string" ||
  s instanceof Texture ||
  s instanceof HTMLCanvasElement ||
  s instanceof HTMLVideoElement;
export const isTextureSource = (s: ImageSource): s is TextureSource =>
  s instanceof HTMLImageElement || s instanceof BaseTexture;

export type ImageSourceMap = Record<string, ImageSource>;
export type ImageMap = Record<string, Sprite>;

export type SplitStyle = "words" | "characters";
export interface TaggedTextOptions {
  debug?: boolean;
  debugConsole?: boolean;
  splitStyle?: SplitStyle;
  imgMap?: ImageSourceMap;
  skipUpdates?: boolean;
  skipDraw?: boolean;
  drawWhitespace?: boolean;
  wrapEmoji?: boolean;
}

///// STYLE PROPERTIES

// PROPERTY NAMES
export const IMG_REFERENCE_PROPERTY = "imgSrc";
export const IMG_DISPLAY_PROPERTY = "imgDisplay";

// todo: add text-transform: uppercase
export type Thickness = number;
export type Color = string | number;
export type Fill = Color | string[] | number[] | CanvasGradient | CanvasPattern;
export type VAlign = "top" | "middle" | "bottom" | "baseline" | number;
export type Align = "left" | "right" | "center" | "justify";
export type ImageDisplayMode = "icon" | "block" | "inline";
export type ImageReference = string;
export type ImageDimensionPercentage = string;
export type ImageDimension = number | string | ImageDimensionPercentage;
export type TextTransform = "normal" | "capitalize" | "uppercase" | "lowercase";
export type FontStyle = "normal" | "italic" | "oblique";
export type TextDecorationValue = "underline" | "overline" | "line-through";
export type TextDecoration =
  | "normal"
  | TextDecorationValue
  | `${TextDecorationValue} ${TextDecorationValue}`
  | `${TextDecorationValue} ${TextDecorationValue} ${TextDecorationValue}`;

export interface TextStyle
  extends Record<string, unknown>,
    Partial<PixiTextStyle> {
  align?: Align;
  fontStyle?: FontStyle;
}

export interface ImageStyles {
  [IMG_REFERENCE_PROPERTY]?: ImageReference;
  [IMG_DISPLAY_PROPERTY]?: ImageDisplayMode;
  imgScale?: ImageDimensionPercentage;
  imgScaleX?: ImageDimensionPercentage;
  imgScaleY?: ImageDimensionPercentage;
  imgWidth?: ImageDimension;
  imgHeight?: ImageDimension;
}

export interface UnderlineStyle {
  underlineColor?: Color;
  underlineThickness?: Thickness;
  underlineOffset?: number;
}
export interface OverlineStyle {
  overlineColor?: Color;
  overlineThickness?: Thickness;
  overlineOffset?: number;
}
export interface LineThroughStyle {
  lineThroughColor?: Color;
  lineThroughThickness?: Thickness;
  lineThroughOffset?: number;
}

export interface TextDecorationStyles
  extends UnderlineStyle,
    OverlineStyle,
    LineThroughStyle {}
export interface TextStyleExtended
  extends TextStyle,
    ImageStyles,
    TextDecorationStyles {
  lineSpacing?: number;
  valign?: VAlign;
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  fontScaleWidth?: number;
  fontScaleHeight?: number;
}

export interface TextDecorationMetrics {
  color: Color;
  bounds: Bounds;
}

export type TextStyleSet = Record<string, TextStyleExtended>;

///// TAG PARSING

type TagName = string;
type AttributeName = string;
type AttributeValue = string | number;
export type AttributesList = Record<AttributeName, AttributeValue>;
export interface TagWithAttributes {
  tagName: string;
  attributes: AttributesList;
}

export interface TagMatchData extends TagWithAttributes {
  tag: string;
  isOpening: boolean;
  index: number;
}
export type TagStack = TagMatchData[];

///// PARSED TOKENS

export type NewlineToken = "\n";
export type WhitespaceToken = " " | "\t" | NewlineToken;
export type TextToken = string;
export type SpriteToken = Sprite;

export interface CompositeToken<T extends Token = Token> {
  children: T[];
}

export type Token = TextToken | CompositeToken | SpriteToken;
export type Tokens = CompositeToken;

export interface TagToken extends CompositeToken<TagToken | TextToken> {
  tag?: TagName;
  attributes?: AttributesList;
}
export type TagTokens = TagToken;

export interface StyledToken
  extends CompositeToken<StyledToken | TextToken | SpriteToken> {
  style: TextStyleExtended;
  tags: string;
}

export type StyledTokens = StyledToken;
export interface FinalToken {
  content: TextToken | SpriteToken;
  bounds: Rectangle;
  fontProperties: IFontMetrics;
  style: TextStyleExtended;
  tags: string;
  textDecorations?: TextDecorationMetrics[];
}

export const createEmptyFinalToken = (): FinalToken => ({
  content: "",
  bounds: new PixiRectangle(),
  fontProperties: { ascent: 0, descent: 0, fontSize: 0 },
  style: {},
  tags: "",
  textDecorations: [],
});

export type WordToken = FinalToken[];
export type LineToken = WordToken[];
export type ParagraphToken = LineToken[];

export interface SpriteFinalToken extends FinalToken {
  content: SpriteToken;
}
export interface TextFinalToken extends FinalToken {
  content: TextToken;
}

export interface WhitespaceFinalToken extends TextFinalToken {
  content: WhitespaceToken;
}
export interface NewlineFinalToken extends TextFinalToken {
  content: NewlineToken;
}

export const isWhitespace = (s: string): s is WhitespaceToken =>
  s !== "" &&
  s.split("").every((char: string): boolean => char.search(/\s/) === 0);
export const isNewline = (s: string): s is NewlineToken =>
  isWhitespace(s) && s === "\n";

export const _isSpriteToken = (t: FinalToken): t is SpriteFinalToken =>
  t.content instanceof Sprite;
export const isSpriteToken = flatEvery(_isSpriteToken);

export const _isTextToken = (t: FinalToken): t is TextFinalToken =>
  typeof t.content === "string";
export const isTextToken = flatEvery(_isTextToken);

export const _isWhitespaceToken = (t: FinalToken): t is WhitespaceFinalToken =>
  t !== undefined && _isTextToken(t) && isWhitespace(t.content);
export const isWhitespaceToken = flatEvery(_isWhitespaceToken);

export const _isNewlineToken = (t: FinalToken): t is NewlineFinalToken =>
  t !== undefined && _isTextToken(t) && isNewline(t.content);
export const isNewlineToken = (t?: Nested<FinalToken>): boolean =>
  t === undefined ? false : flatEvery(_isNewlineToken)(t);

export const isNotWhitespaceToken = complement(isWhitespaceToken);

export const isEmptyObject = <T extends unknown>(a: T): boolean =>
  a instanceof Object && Object.keys(a).length === 0;
