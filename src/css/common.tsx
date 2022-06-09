import { CSSProperties } from "react";
import { colors } from "../data/colors"


export const fontFamily: CSSProperties = {
    fontFamily: "Aktiv Grotesk Extended,sans-serif"
}

export const fontLogo: CSSProperties = {
  fontFamily: "Poppins, sans-serif"
}

export const textStyle: CSSProperties = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: colors.third
}

export const styleBtn: CSSProperties = {
    backgroundColor: colors.third, 
    color: colors.secondary,
    fontSize: "12px",
    display: "flex"

   /*  Fixa hover på knapparna samt centrera knapparna */
}


export const imgContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3em",
    paddingTop: "1em",
    paddingBottom: "3em"
  }


  export const imgCategory: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
    paddingBottom: "3em"
  }

  export const styleHeader: CSSProperties = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "flex-start", 
    fontSize: "18px",
    color: colors.third
}