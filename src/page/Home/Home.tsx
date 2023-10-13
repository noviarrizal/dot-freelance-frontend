// components/MainContent.tsx
import React from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading/Loading';

const ContentContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

interface MainContentProps {
  isLoading: boolean;
  data: any;
}

const MainContent: React.FC<MainContentProps> = ({ isLoading, data }) => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {isLoading ? <Loading /> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MainContent;
