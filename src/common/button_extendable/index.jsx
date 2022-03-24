/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React from 'react'

const extendable = (Component, props) => {
  console.log(props)
  return Component
}

function BaseButton() {
  return (
    <button
      css={css`
        padding: 16px;
        font-size: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
      `}
    >
    </button>
  )
}
export default extendable(BaseButton, { button: { background: 'red', color: 'white'}})