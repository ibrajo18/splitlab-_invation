/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Splitlab Logo"
    >
      <defs>
        <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      
      {/* Orbits - Recreating the abstract atom icon from reference */}
      <ellipse 
        cx="50" cy="50" rx="42" ry="15" 
        stroke="url(#orbitGradient)" 
        strokeWidth="2.5" 
        transform="rotate(0 50 50)" 
      />
      <ellipse 
        cx="50" cy="50" rx="42" ry="15" 
        stroke="url(#orbitGradient)" 
        strokeWidth="2.5" 
        transform="rotate(60 50 50)" 
      />
      <ellipse 
        cx="50" cy="50" rx="42" ry="15" 
        stroke="url(#orbitGradient)" 
        strokeWidth="2.5" 
        transform="rotate(120 50 50)" 
      />
      
      {/* Small circular nodes along orbit paths */}
      <circle cx="92" cy="50" r="3" fill="#4F46E5" />
      <circle cx="7" cy="43" r="2.5" fill="#2563EB" />
      <circle cx="30" cy="15" r="2" fill="#2563EB" />
      <circle cx="70" cy="85" r="2" fill="#2563EB" />
      
      {/* Central core circle */}
      <circle cx="50" cy="50" r="8" fill="#4F46E5" />
      <circle cx="48" cy="48" r="2.5" fill="white" fillOpacity="0.4" />
    </svg>
  );
}
