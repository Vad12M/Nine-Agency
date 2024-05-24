interface IProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  isArea?: boolean;
  className?: string;
  placeholderTextColor?: string;
  color?: string;
}


export default function Input({
  placeholder,
  onChange,
  value,
  isArea,
  className,
  placeholderTextColor = 'text-white',
  color = 'white',
}: IProps) {
  if (isArea) {
    return (
      <textarea
        className={`
          border border-white py-4 px-6 rounded-[16px] w-full bg-background text-${color} placeholder:${placeholderTextColor}
          h-[150px] outline-none
          ${className}
        `}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    )
  }

  return (
    <input
      type="text"
      className={`
        border border-white py-4 px-6 rounded-[16px] w-full bg-background text-${color} placeholder:${placeholderTextColor} relative
        outline-0
        ${className}
      `}
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  )
}
