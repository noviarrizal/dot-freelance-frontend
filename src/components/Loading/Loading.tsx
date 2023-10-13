import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;

const Loading: React.FC = () => {
  return <Wrapper>Loading...</Wrapper>;
};

export default Loading;
