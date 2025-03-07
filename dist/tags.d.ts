import { TagMatchData, AttributesList, TagWithAttributes, CompositeToken, TagToken, TextToken } from "./types";
export declare const getTagRegex: (tagNamesToMatch?: string[]) => RegExp;
export declare const EMOJI_TAG = "__EMOJI__";
export declare const parseAttributes: (attributesString?: string) => AttributesList;
export declare const createTagMatchData: (match: RegExpExecArray) => TagMatchData;
export declare const tagMatchDataToTagWithAttributes: (tag: TagMatchData) => TagWithAttributes;
export declare const extractSegments: (input: string, tagMatchData: TagMatchData[]) => string[];
export declare const wrapEmoji: (input: string) => string;
export declare const replaceSelfClosingTags: (input: string) => string;
export declare const removeTags: (input: string) => string;
export declare const tagMatchToTagToken: (tag: TagMatchData) => TagToken;
export declare const createTokensNew: (segments: string[], tags: TagMatchData[]) => (TagToken | TextToken)[];
export declare const containsEmoji: (input: string) => boolean;
export declare const parseTagsNew: (input: string, tagNamesToMatch?: string[], shouldWrapEmoji?: boolean) => CompositeToken<TagToken | TextToken>;
