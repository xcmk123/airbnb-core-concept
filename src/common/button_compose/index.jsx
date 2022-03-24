/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const cssProps = {
  primary: css`
    background-color: red;
    &:hover {
      color: white;
    }
  `,
  secondary: css`
    background-color: yellow;
    &:hover {
      color: white;
    }
  `,
  ghost: css`
    background-color: blue
    &:hover {
      color: white;
    }
  `,
}
const BaseButton = ({children, variant = 'primary'}) => {
  return (
    <button
      css={css`
        padding: 16px;
        background: none;
        font-size: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        ${cssProps[variant]}
      `}
    >
      {children}
    </button>
  )
}
export default BaseButton