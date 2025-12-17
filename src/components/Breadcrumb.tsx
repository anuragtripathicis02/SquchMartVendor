"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ href: '/', label: 'Home' }]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable label
      const label = segment
        .split(/(?=[A-Z])/) // Split on capital letters
        .join(' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
        .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
        .replace(/squch/gi, 'Squch') // Proper case for Squch
        .replace(/mart/gi, 'Mart') // Proper case for Mart
        .replace(/otp/gi, 'OTP') // Proper case for OTP
      
      breadcrumbs.push({
        href: currentPath,
        label: label
      })
    })
    
    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <nav aria-label="breadcrumb" className="mt-3">
      <ol className="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <li 
            key={crumb.href} 
            className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
          >
            {index === breadcrumbs.length - 1 ? (
              crumb.label
            ) : (
              <Link href={crumb.href}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb