import { CSSProperties } from "styled-components";

const root = {
    Primary:{
        Navy850: "hsl(217, 28%, 15%)",
        Navy900: "hsl(218, 28%, 13%)",
        Navy950: "hsl(216, 53%, 9%)",
        Navy800: "hsl(219, 30%, 18%)",
    },
    Neutral:{
        white:"hsl(0, 0%, 100%)",
    },
    Accent:{
        Teal200:"hsl(176, 68%, 64%)",
        Cyan500:"hsl(198, 60%, 50%)",
        Red500:"hsl(0, 100%, 63%)",
    }
};

export const StyleWeb = {
  GlobalsStyle: {
    background: root.Primary.Navy950,
    color:root.Neutral.white
  } as CSSProperties,
  StyleComponent:{
    GetStarted:{
      background:`linear-gradient(-200deg,${root.Accent.Teal200},${root.Accent.Cyan500})`,
    }as CSSProperties
  },
  DesktopStyle: {
    bgNavy800:{
      background:root.Primary.Navy800
    } as CSSProperties,
    bgNavy850:{
      background:root.Primary.Navy850
    } as CSSProperties,
    bgNavy900:{
      background:root.Primary.Navy900
    } as CSSProperties,
    bgNavy950:{
      background:root.Primary.Navy950
    } as CSSProperties,
  },
};
