import { Block } from '@/components/block'

const controls = [
  { id: 1, key: 'Q', label: '- Догонять за санитара' },
  { id: 2, key: 'P', label: '- Убегать за шизоида' },
  { id: 3, key: 'R', label: '- Рестарт' }
]

const Controls = () => {
  return (
    <Block>
      <p className="text-base font-medium">Управление</p>

      {controls.map((item) => (
        <div className="flex items-center gap-1" key={item.id}>
          <p className="w-7 text-center text-3xl font-bold text-[#3446DE]">
            {item.key}
          </p>
          <p className="text-2xl font-normal text-black">{item.label}</p>
        </div>
      ))}
    </Block>
  )
}

export { Controls }
