import background from './background.svg'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <div
      css={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </div>
  )
}
