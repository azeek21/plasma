import { TokenDataGroup } from '@salutejs/plasma-tokens-utils';

export type Point = {
    x: number;
    y: number;
};

export interface Gradient {
    colors: Array<string>;
    locations?: Array<string>;
    angle?: number;
    start?: Point;
    end?: Point;
}

export const enum ThemeColor {
    light = 'Light',
    dark = 'Dark',
}

export type ThemeColorType = 'Light' | 'Dark';

export interface GradientToken {
    startColor: string;
    endColor: string;
    startPoint: string;
    endPoint: string;
}

export type ThemeTokenDataGroups = Record<string, TokenDataGroup<string> | undefined>;