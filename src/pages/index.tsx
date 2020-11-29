import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`;

const Column = styled.div`
  padding: 0 2.25rem;

  &:first-child {
    border-right: 1px solid var(--border);
  }
`;

const Heading = styled.h1`
  color: var(--primary);
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
`;

const SubHeading = styled.h2`
  color: var(--primary);
  font-weight: 700;
  font-size: 1.75rem;
`;

const SubSubHeading = styled.h3`
  color: var(--primary);
  font-weight: 600;
  height: 4rem;
  margin: 0;
  text-align: middle;
  font-size: 1.25rem;
  line-height: 4rem;
`;

const List = styled.ul`
  list-style-type: square;
  list-style: inside;

  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-position: center;
  object-fit: cover;
  border-radius: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 6rem;
`;

const VideoWrapper = styled.div`
  width: 630px;
  height: 354.375px;
  background: var(--border);
`;

const Index = () => {
  return (
    <Layout>
      <Column>
        <SubSubHeading>Home Page</SubSubHeading>
        <Heading>G9 Track and Trace Solutions</Heading>
        <section>
          <SubHeading>Our Mission</SubHeading>
          <p>To transform Australia into an advanced manufacturing nation.</p>
        </section>
        <section>
          <SubHeading>Our Method</SubHeading>
          <p>
            By increasing the reliability and resilience of our supply chain,
            ensuring products are tracked and traced from manufacture to
            distribution. Through use of data analytics and software, we hope to
            position Australia at the forefront of the next industrial
            revolution i.e. Industry 4.0.
          </p>
        </section>
        <section>
          <SubHeading>Our Team</SubHeading>
          <p>
            Our organisation is composed of the following talented indivduals,
            in charge of the respective portfolios:
          </p>
          <List>
            <li>
              <span>Lakshan</span> - Data Sensing Portfolio
            </li>
            <li>
              <span>Anthony</span> - Security Portfolio
            </li>
            <li>
              <span>Jing</span> - Data Aggregation Portfolio
            </li>
            <li>
              <span>Eugene</span> - User Experience Portfolio
            </li>
            <li>
              <span>John</span> - Risk Management Portfolio
            </li>
            <li>
              <span>Kai</span> - Manufacturing Forecasts and Recommendations
              Portfolio
            </li>
            <li>
              <span>Eleanor</span> - Return on Investment Portfolio
            </li>
          </List>
        </section>
        <section>
          <SubHeading>Our Heroes</SubHeading>
          <ImageWrapper>
            <Image src="/images/lyons.jpg" />
            <Image src="/images/ali.png" />
          </ImageWrapper>
        </section>
      </Column>
      <Column>
        <Flex>
          <SubHeading>Presentation Video</SubHeading>
          <span>Coming soon...</span>
          <VideoWrapper />
        </Flex>
      </Column>
    </Layout>
  );
};

export default Index;
