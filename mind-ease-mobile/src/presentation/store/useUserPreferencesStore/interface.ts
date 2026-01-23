
export interface States {
    fontSizeScale: number
    spacingScale: number
}

export interface Actions {
    increaseFontSizeScale: (fontSizeScale: number) => void
    decreaseFontSizeScale: (fontSizeScale: number) => void

    increaseSpacingScale: (spacingScale: number) => void
    decreaseSpacingScale: (spacingScale: number) => void
}