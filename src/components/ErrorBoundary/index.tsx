import React, { Component } from 'react';

import boundaryImage from '@assets/images/boundary.png';
import { failureText } from '@constants/text';

import { Boundary, BoundaryImage, BoundaryText } from './styled';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Boundary>
          <BoundaryImage src={boundaryImage} />
          <BoundaryText>{failureText}</BoundaryText>
        </Boundary>
      );
    }

    return this.props.children;
  }
}
