import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Tamás Bartos</p>
      </div>
    </footer>
  )
}

export default Footer 