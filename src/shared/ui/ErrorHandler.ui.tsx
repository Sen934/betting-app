import { Button } from '@mui/material';

type ErrorHandlerProps = {
  error: Error;
  resetErrorBoundary?: (...args: any[]) => void;
};

export const ErrorHandler = (props: ErrorHandlerProps) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div>
      <h3>Something went wrong.</h3>
      {import.meta.env.DEV && (
        <>
          <ul className="error-messages">
            <li key={error.message}>{error.message}</li>
          </ul>
          <pre>{error.stack}</pre>
        </>
      )}
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};
