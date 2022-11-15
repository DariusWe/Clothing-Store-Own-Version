import { Container, Spinner } from "./loading-spinner.styles";

// The className prop is necessary if you want to reference the styles of this component in another component.
// Styled components automatically creates this classname and passes it as a prop.

const LoadingSpinner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  console.log("LoadingSpinner");
  return (
    <Container className={className}>
      <Spinner></Spinner>
    </Container>
  );
};

export default LoadingSpinner;
