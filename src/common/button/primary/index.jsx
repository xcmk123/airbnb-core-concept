/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import BaseButton from '..'
const PrimaryButton = ({children}) => {
  return (
    <BaseButton 
      button= {
        css`
          background-color: red;
          color: white;
        `
      }
    >
      {children}
    </BaseButton>
  )
}
export default PrimaryButton