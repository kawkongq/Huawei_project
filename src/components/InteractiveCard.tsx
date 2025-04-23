'use client'
import React from 'react';

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  function onmouse(event: React.SyntheticEvent) {
    if (event.type === 'mouseover') {
      event.currentTarget.classList.remove('shadow-lg')
      event.currentTarget.classList.remove('bg-white')
      event.currentTarget.classList.add('shadow-2xl')
      event.currentTarget.classList.add('bg-neutral-200')
    } else {
      event.currentTarget.classList.remove('shadow-2xl')
      event.currentTarget.classList.remove('bg-neutral-200')
      event.currentTarget.classList.add('shadow-lg')
      event.currentTarget.classList.add('bg-white')
    }
  }

  return (
    <div
      style={{
        width: "365px",           
        height: "600px",  
        overflowY: "auto",        
        borderRadius: "0.75rem",   
        backgroundColor: "white",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        marginTop: "10px"
      }}
      className="shadow-lg bg-white"
      onMouseOver={(e) => onmouse(e)}
      onMouseOut={(e) => onmouse(e)}
    >
      {children}
    </div>
  );
}
