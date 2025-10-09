export interface Tab {
  key: string;
  label: string;
  icon: React.ReactElement;
  badge?: number;
}

export interface DesignSystemTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    onSurface: string;
    pink: string;
    indigo: string;
  };
  spacing: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    pill: number;
  };
  type: {
    fonts: {
      regular: string;
      bold: string;
      mono: string;
    };
    sizes: {
      caption: number;
      body: number;
      callout: number;
      title3: number;
      title2: number;
      largeTitle: number;
    };
    weights: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  };
}
