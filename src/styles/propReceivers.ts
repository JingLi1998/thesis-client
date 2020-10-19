import { css, DefaultTheme } from "styled-components";
import { breakpoints, theme as untypedTheme } from "./index";

const theme: DefaultTheme = untypedTheme;

export type TypographyProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontSizeMd?: string;
  lineHeight?: string;
  lineHeightMd?: string;
  textAlign?: string;
  uppercase?: boolean;
};

export const typographyProps = (props: TypographyProps) => css`
  ${props.color && `color: ${theme.colors[props.color] || props.color}`};
  ${props.fontSize && `font-size: ${props.fontSize}`};
  ${props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${props.lineHeight && `line-height: ${props.lineHeight}`};
  ${props.textAlign && `text-align: ${props.textAlign}`};
  ${props.uppercase && `text-transform: uppercase`};

  ${breakpoints.md} {
    ${props.fontSizeMd && `font-size: ${props.fontSizeMd}`};
    ${props.lineHeightMd && `line-height: ${props.lineHeightMd}`};
  }
`;

export type FlexProps = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
};

export const flexProps = (props: FlexProps) => css`
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.alignItems && `align-items: ${props.alignItems}`};
`;

export type MarginProps = {
  m?: string;
  mx?: string;
  my?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
};

export const marginProps = (props: MarginProps) => css`
  ${props.m && `margin: ${props.m}`};
  ${props.mx && `margin: 0 ${props.mx}`};
  ${props.my && `margin: ${props.my} 0`};
  ${props.mt && `margin-top: ${props.mt}`};
  ${props.mb && `margin-bottom: ${props.mb}`};
  ${props.ml && `margin-left: ${props.ml}`};
  ${props.mr && `margin-right: ${props.mr}`};
`;

export type PaddingProps = {
  p?: string;
  px?: string;
  py?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
};

export const paddingProps = (props: PaddingProps) => css`
  ${props.p && `padding: ${props.p}`};
  ${props.px && `padding: 0 ${props.px}`};
  ${props.py && `padding: ${props.py} 0`};
  ${props.pt && `padding-top: ${props.pt}`};
  ${props.pb && `padding-bottom: ${props.pb}`};
  ${props.pl && `padding-left: ${props.pl}`};
  ${props.pr && `padding-right: ${props.pr}`};
`;

export type LayoutProps = {
  w?: string;
  h?: string;
  maxW?: string;
  maxH?: string;
  minW?: string;
  minH?: string;
};

export const layoutProps = (props: LayoutProps) => css`
  ${props.w && `width: ${props.w}`};
  ${props.h && `height: ${props.h}`};
  ${props.minW && `min-width: ${props.minW}`};
  ${props.minH && `min-height: ${props.minH}`};
  ${props.maxW && `max-width: ${props.maxW}`};
  ${props.maxH && `max-height: ${props.maxH}`};
`;
