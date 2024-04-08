interface ExperienceProps {
  time: string
  position: string
  company: string
}
interface EducationProps {
  time: string
  major: string
  school: string
}

interface BlockExpProps {
  title: string
  expData?: ExperienceProps[]
  eduData?: EducationProps[]
  type: 'education' | 'experience'
}

export default function BlockExp({ title, expData, eduData, type }: BlockExpProps) {
  return (
    <div className='col-span-2 h-[20em] bg-background_2 rounded-[2em] p-7'>
      <p className='text-white uppercase font-ubutun'>{title}</p>

      {type === 'education' && (
        <>
          {eduData?.map((item, index) => (
            <div key={index}>
              <p>{item.time}</p>
              <p>{item.major}</p>
              <p>{item.school}</p>
            </div>
          ))}
        </>
      )}
      {type === 'experience' && (
        <>
          {expData?.map((item, index) => (
            <div key={index}>
              <p>{item.time}</p>
              <p>{item.position}</p>
              <p>{item.company}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
