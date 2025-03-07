import { Texture } from "@pixi/core";
import { Sprite } from "@pixi/sprite";
import { Text } from "@pixi/text";
import { Container } from "@pixi/display";
import { Graphics } from "@pixi/graphics";
import "@pixi/events";
import { TaggedTextOptions, TextStyleSet, TextStyleExtended, TagWithAttributes, AttributesList, ImageMap, FinalToken, ParagraphToken } from "./types";
export declare const DEFAULT_OPTIONS: TaggedTextOptions;
export default class TaggedText extends Sprite {
    static get defaultStyles(): TextStyleSet;
    static get defaultOptions(): TaggedTextOptions;
    private _options;
    get options(): TaggedTextOptions;
    private _needsUpdate;
    get needsUpdate(): boolean;
    private _needsDraw;
    get needsDraw(): boolean;
    private _tokens;
    get tokensFlat(): FinalToken[];
    get tokens(): ParagraphToken;
    private _text;
    get text(): string;
    set text(text: string);
    setText(text: string, skipUpdate?: boolean): void;
    get untaggedText(): string;
    private _tagStyles;
    get tagStyles(): TextStyleSet;
    set tagStyles(styles: TextStyleSet);
    setTagStyles(styles: TextStyleSet, skipUpdate?: boolean): void;
    getStyleForTag(tag: string, attributes?: AttributesList): TextStyleExtended | undefined;
    getStyleForTags(tags: TagWithAttributes[]): TextStyleExtended;
    setStyleForTag(tag: string, styles: TextStyleExtended, skipUpdate?: boolean): boolean;
    removeStylesForTag(tag: string, skipUpdate?: boolean): boolean;
    get defaultStyle(): TextStyleExtended;
    set defaultStyle(defaultStyles: TextStyleExtended);
    setDefaultStyle(defaultStyles: TextStyleExtended, skipUpdate?: boolean): void;
    private _textFields;
    get textFields(): Text[];
    private _sprites;
    get sprites(): Sprite[];
    private _decorations;
    get decorations(): Graphics[];
    private _spriteTemplates;
    get spriteTemplates(): ImageMap;
    private _debugGraphics;
    private _textContainer;
    get textContainer(): Container;
    private _decorationContainer;
    get decorationContainer(): Container;
    private _spriteContainer;
    get spriteContainer(): Container;
    private _debugContainer;
    get debugContainer(): Container;
    constructor(text?: string, tagStyles?: TextStyleSet, options?: TaggedTextOptions, texture?: Texture);
    private resetChildren;
    private createSpriteTemplatesFromSourceMap;
    private onImageTextureUpdate;
    private updateIfShould;
    update(skipDraw?: boolean): ParagraphToken;
    private drawIfShould;
    draw(): void;
    private createDrawingForTextDecoration;
    private createTextFieldForToken;
    toDebugString(): string;
    drawDebug(): void;
}
