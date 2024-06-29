import Head from 'next/head';
import Page from '$/components/layouts/Page';
import styled from '@emotion/styled';
import Button from '$/components/Button';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>React-overlay</title>
        <meta name="description" content="react-overlay" />
      </Head>
      <Container>
        <Title>React-overlay</Title>
        <Description>
          The easy way to manger all react overlays, like modal, toast
        </Description>
        <Row>
          <Link href="/react-overlay/docs">Docs</Link>
          <Link href="https://github.com/relaxgo/react-overlay">Github</Link>
        </Row>
      </Container>
    </Page>
  );
}

const Link = Button.withComponent('a');

const Container = styled.div`
  padding: 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: auto;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
