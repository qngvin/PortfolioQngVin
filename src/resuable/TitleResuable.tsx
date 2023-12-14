import React from 'react'

function TitleResuable({ text, color }: { text: string; color?: string }) {
  return <h1 className={`text-${color} py-10 text-center  font-ubutun text-[30px] `}>{text}</h1>
}

export default TitleResuable
