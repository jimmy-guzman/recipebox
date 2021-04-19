import background from './background.svg'

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps): JSX.Element => {
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
