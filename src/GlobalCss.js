import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { COLORS } from './constants'

function GlobalCss() {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        html {
          font-size: 62.5%;
        }

        body {
          font-family: 'Kanit', sans-serif;
          color: ${COLORS.BLACK};
          background-color: ${COLORS.GREY};
          line-height: 2.4rem;
        }
      `}
    />
  )
}

export default GlobalCss
