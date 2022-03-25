/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const extendable = (Component, styles) => {
  return (props) => {
    return <Component styles={styles()}>
        {props.children} 
      </Component>
  }
}

function BaseButton({styles, children}) {
  return (
    <button
      css={css`
        padding: 16px;
        font-size: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        ${styles.button}
      `}
    >
      {children}
    </button>
  )
}
export default extendable(BaseButton, 
  () => ({ 
    button: { 
      background: 'red', 
      color: 'white',
    }
  })
)