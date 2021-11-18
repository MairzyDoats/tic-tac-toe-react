import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="footer__copyright">©{year} Julian Krüger</p>
    </div>
  )
}
