import { BaseTexture, Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { TextStyle as PixiTextStyle } from "@pixi/text";
export declare type Point = {
    x: number;
    y: number;
};
export declare type Rectangle = Point & {
    width: number;
    height: number;
};
export interface IFontMetrics {
    ascent: number;
    descent: number;
    fontSize: number;
}
export declare type Bounds = Rectangle;
export declare type Nested<T> = T | Array<Nested<T>>;
export declare type SpriteSource = string | Texture | HTMLCanvasElement | HTMLVideoElement;
export declare type TextureSource = string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | BaseTexture;
export declare type ImageSource = Sprite | SpriteSource | TextureSource;
export declare const isSpriteSource: (s: ImageSource) => s is SpriteSource;
export declare const isTextureSource: (s: ImageSource) => s is TextureSource;
export declare type ImageSourceMap = Record<string, ImageSource>;
export declare type ImageMap = Record<string, Sprite>;
export declare type SplitStyle = "words" | "characters";
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
export declare const IMG_REFERENCE_PROPERTY = "imgSrc";
export declare const IMG_DISPLAY_PROPERTY = "imgDisplay";
export declare type Thickness = number;
export declare type Color = string | number;
export declare type Fill = Color | string[] | number[] | CanvasGradient | CanvasPattern;
export declare type VAlign = "top" | "middle" | "bottom" | "baseline" | number;
export declare type Align = "left" | "right" | "center" | "justify";
export declare type ImageDisplayMode = "icon" | "block" | "inline";
export declare type ImageReference = string;
export declare type ImageDimensionPercentage = string;
export declare type ImageDimension = number | string | ImageDimensionPercentage;
export declare type TextTransform = "normal" | "capitalize" | "uppercase" | "lowercase";
export declare type FontStyle = "normal" | "italic" | "oblique";
export declare type TextDecorationValue = "underline" | "overline" | "line-through";
export declare type TextDecoration = "normal" | TextDecorationValue | `${TextDecorationValue} ${TextDecorationValue}` | `${TextDecorationValue} ${TextDecorationValue} ${TextDecorationValue}`;
export interface TextStyle extends Record<string, unknown>, Partial<PixiTextStyle> {
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
export interface TextDecorationStyles extends UnderlineStyle, OverlineStyle, LineThroughStyle {
}
export interface TextStyleExtended extends TextStyle, ImageStyles, TextDecorationStyles {
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
export declare type TextStyleSet = Record<string, TextStyleExtended>;
declare type TagName = string;
declare type AttributeName = string;
declare type AttributeValue = string | number;
export declare type AttributesList = Record<AttributeName, AttributeValue>;
export interface TagWithAttributes {
    tagName: string;
    attributes: AttributesList;
}
export interface TagMatchData extends TagWithAttributes {
    tag: string;
    isOpening: boolean;
    index: number;
}
export declare type TagStack = TagMatchData[];
export declare type NewlineToken = "\n";
export declare type WhitespaceToken = " " | "\t" | NewlineToken;
export declare type TextToken = string;
export declare type SpriteToken = Sprite;
export interface CompositeToken<T extends Token = Token> {
    children: T[];
}
export declare type Token = TextToken | CompositeToken | SpriteToken;
export declare type Tokens = CompositeToken;
export interface TagToken extends CompositeToken<TagToken | TextToken> {
    tag?: TagName;
    attributes?: AttributesList;
}
export declare type TagTokens = TagToken;
export interface StyledToken extends CompositeToken<StyledToken | TextToken | SpriteToken> {
    style: TextStyleExtended;
    tags: string;
}
export declare type StyledTokens = StyledToken;
export interface FinalToken {
    content: TextToken | SpriteToken;
    bounds: Rectangle;
    fontProperties: IFontMetrics;
    style: TextStyleExtended;
    tags: string;
    textDecorations?: TextDecorationMetrics[];
}
export declare const createEmptyFinalToken: () => FinalToken;
export declare type WordToken = FinalToken[];
export declare type LineToken = WordToken[];
export declare type ParagraphToken = LineToken[];
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
export declare const isWhitespace: (s: string) => s is WhitespaceToken;
export declare const isNewline: (s: string) => s is "\n";
export declare const _isSpriteToken: (t: FinalToken) => t is SpriteFinalToken;
export declare const isSpriteToken: (nested: Nested<FinalToken>) => boolean;
export declare const _isTextToken: (t: FinalToken) => t is TextFinalToken;
export declare const isTextToken: (nested: Nested<FinalToken>) => boolean;
export declare const _isWhitespaceToken: (t: FinalToken) => t is WhitespaceFinalToken;
export declare const isWhitespaceToken: (nested: Nested<FinalToken>) => boolean;
export declare const _isNewlineToken: (t: FinalToken) => t is NewlineFinalToken;
export declare const isNewlineToken: (t?: Nested<FinalToken> | undefined) => boolean;
export declare const isNotWhitespaceToken: (input: Nested<FinalToken>) => boolean;
export declare const isEmptyObject: <T extends unknown>(a: T) => boolean;
export {};
