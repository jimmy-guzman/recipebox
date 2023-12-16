import { Button, GridRow, Typography } from '../../atoms';
import { Box } from '../Box';
import { BoxHeader } from '../BoxHeader';

interface ErrorFallbackProps {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => {
  return (
    <Box variant='secondary'>
      <BoxHeader variant='secondary'>
        <Typography variant='h2'>Something went wrong!</Typography>
      </BoxHeader>
      <GridRow>
        <Typography>Error: {error.message}</Typography>
      </GridRow>
      <GridRow>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </GridRow>
    </Box>
  );
};
