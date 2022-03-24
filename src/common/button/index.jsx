/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const BaseButton = ({children, button}) => {
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
        background-color: yellow;
        &:hover {
          color: green;
        }
        ${button}
      `}
    >
      {children}
    </button>
  )
}
export default BaseButton