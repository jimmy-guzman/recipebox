interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List = ({ children, className }: ListProps): JSX.Element => {
  return (
    <ul
      className={className}
      css={{
        padding: 0,
        listStyleType: 'none',
        margin: 0,
      }}
    >
      {children}
    </ul>
  );
};
