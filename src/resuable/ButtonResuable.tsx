interface ButtonResuableProps {
  text: string
  color?: string
  colorText?: string
  icon: React.ReactNode
}
function ButtonResuable({ text, color, colorText, icon }: ButtonResuableProps) {
  const buttonStyle = {
    backgroundColor: `${color}`
  }
  return (
    <button
      style={buttonStyle}
      className={`relative  text-[17px] rounded-[10px] flex items-center gap-2 px-4 py-4 font-medium overflow-hidden group`}
    >
      <span className={`text-${colorText} mr-2 z-10`}>{text}</span>
      {icon && <span className={`text-${colorText} text-[22px] z-10`}>{icon}</span>}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-300 to-[#FFE382] w-0 group-hover:w-full transition-width duration-500 ease-in-out'></div>
    </button>
  )
}

export default ButtonResuable
