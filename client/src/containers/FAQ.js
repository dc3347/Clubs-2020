import React from 'react';
import { FaqBox } from '../components/faqbox';
import styled from 'styled-components';

const PageWrapper = styled.main`
  background-color: ${props=>props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  text-align:center;
  display: inline;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
`;


export const FAQ = () => {
    return(
        <PageWrapper>
            <Title>Frequently Asked Questions</Title>
            <FaqBox 
                title="What is Clubs@CU?" 
                text="Clubs@CU is your central source of information about student organizations at Barnard and Columbia. 
                Keep discovering new clubs throughout the year, not just at the Club Fair."
                buttonText="Explore Clubs"
                buttonLink="/explore"
            />
            <FaqBox 
                title="How do I use Clubs@CU? (Student)" 
                text="Want to browse clubs at Barnard and Columbia? Clubs@CU is your best resource!

                > Do an organized search with our many search tools
                > Do a random search with our shuffle functionality
                > Cursorily glance over many clubs at once 
                > Peruse club profiles for in depth information by clubs themselves"
                buttonText="Explore Clubs"
                buttonLink="/"
            />
            <FaqBox 
                title="How do I use Clubs@CU? (Clubs)" 
                text="Run an official or unrecognized club? Both are welcome to create profiles on our platform and be represented here."
                buttonText="Register Club"
                buttonLink="/"
            />
            <FaqBox 
                title="I have a specific inquiry." 
                text="Lost access to club profile? Club profile hacked or no longer secure? If you have a sensitive or pressinng request, please let us know."
                buttonText="Contact Us"
                buttonLink="/"
            />
            <FaqBox 
                title="How can I provide feedback?" 
                text="Designed for club seekers and club leaders, Clubs@CU values your feedback! To report a bug, ask a question, or suggest a modification, please fill out our feedback form."
                buttonText="Feedback Form"
                buttonLink="/"
            />
        </PageWrapper>
    )
}