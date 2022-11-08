import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Sefhia Ulbi
        </a>
        <span className="ms-1">&copy; 2022 sangkuriang.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.roniandarsyah.com/" target="_blank" rel="noopener noreferrer">
          Sangkuriang Gengs LTD
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
