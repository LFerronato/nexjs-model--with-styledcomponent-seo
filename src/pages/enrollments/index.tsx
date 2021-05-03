import { ReactNode } from 'react';

import { Container } from './styles';

interface IEnrollmentsProps {
  children: ReactNode;
}

function Enrollments({ children }: IEnrollmentsProps) {
  return (
    <Container>
      <h1>Enrollments</h1>
      {children}
    </Container>
  );
};

export default Enrollments;
