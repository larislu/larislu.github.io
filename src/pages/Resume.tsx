import NavBarSpacer from "../components/NavBarSpacer";
import styled from "styled-components";

const Page = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5em;
  gap: 1em;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: rgba(175, 216, 222, 0.7);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  max-width: 100%;
  max-width: 800px;
  margin-bottom: 1em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Header = styled.h2`
  margin: 0;
`;

const Team = styled.h3`
  margin-top: 1em;
  margin-bottom: 0;
`;

const List = styled.ul`
  margin: 0;
  line-height: 1.25em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 16px 24px;
`;

const Resume = () => {
  return (
    <Page>
      <Title>
        <NavBarSpacer />
        <h1>my resume.</h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/10LWTCsZbNqKGp9IX8icex26FPBN7XRQJ/view?usp=sharing"
        >
          View as PDF
        </a>
      </Title>
      <Card>
        <Content>
          <Header>
            Software Engineer @ <a href="https://poly.cam/">Polycam</a>
          </Header>
          <span>
            App that uses AI-assisted photogrammetry and LiDAR to create 3D
            models.
          </span>
          <Team>Fullstack Team</Team>
          <span>Nov 2022 - Mar 2026</span>
          <List>
            <li>
              Created the UI of critical user flows from scratch, such as the
              login/sign-up screens and library bulk deletion, for our
              AI-assisted photogrammetry and LiDAR 3D scanning application.
            </li>
            <li>
              Built design system components in both web and React Native, and
              helped maintain documentation consistency in Figma and test
              coverage in Storybook.
            </li>
            <li>
              Led the engineering effort for dark mode and a new re-branded
              color scheme to cement the app as a professional enterprise tool,
              and advocated for visual accessibility guidelines.
            </li>
            <li>
              Developed the cross-platform rich text editor for the 3D viewer
              comments tool, enabling real-time in-app collaboration via tagging
              someone's username or email address.
            </li>
            <li>
              Engineered the “change my email” flow from the front-end forms to
              the backend email triggers, drastically reducing the number of
              tickets received by customer support.
            </li>
            <li>
              Integrated the AI 3D generator into the Scenes as a product
              designer, going through the whole process from competitor
              research, design critique, to engineering handoff.
            </li>
          </List>
          <span>
            Skills: TypeScript, React, React Native, Figma, HTML/CSS, Firebase,
            Git
          </span>
        </Content>
      </Card>
      <Card>
        <Content>
          <Header>
            Software Engineer @ <a href="https://www.compass.com/">Compass</a>
          </Header>
          <span>
            Real estate brokerage with an end-to-end workflow platform.
          </span>
          <Team>Transaction Management, Offers Team</Team>
          <span>Oct 2021 - Sep 2022</span>
          <List>
            <li>
              Delivered tools that assist both buyer and seller agents in
              managing transactions and offers under the Compass brokerage,
              creating an end-to-end process.
            </li>
            <li>
              Integrated an{" "}
              <a href="https://www.glide.com/">acquired startup's</a> product,
              one that helps buyer and seller real estate agents manage offers
              end-to-end, into the Compass app by bridging two separate tech
              stacks.
            </li>
            <li>
              Handled fast-paced communication with customer support while
              regularly on-call, diagnosing issues and writing post-mortems for
              incidents.
            </li>
          </List>
          <Team>Insights & Analytics Team</Team>
          <span>Jan 2021 - Oct 2021</span>
          <List>
            <li>
              Built the frontend of a data dashboard app that allows an agent to
              generate insightful reports for their clients to better understand
              the housing market, given a set of filters and criteria.
            </li>
            <li>
              Drove decisions on which graphics libraries to use while
              collaborating with with UX designers, PMs, and other engineers.
            </li>
          </List>
          <span>
            Skills: TypeScript, JavaScript, React, HTML/CSS, Python, Git
          </span>
        </Content>
      </Card>
      <Card>
        <Content>
          <Header>
            Junior Software Engineer @ <a href="https://vantor.com/">Vantor</a>
          </Header>
          <span>
            Geospatial intelligence. Formerly known as Maxar Technologies.
          </span>
          <Team>Engineering Team</Team>
          <span>Aug 2018 - Dec 2020</span>
          <List>
            <li>
              Prototyped a modular framework with chained algorithms to process
              raw radar data into viewable satellite photos.
            </li>
            <li>
              Developed solutions that greatly increased the speed of panning
              and zooming in an application with a map viewer, allowing the GIS
              analysts to work more efficiently.
            </li>
            <li>
              Crafted satellite-related web widgets as part of a contract
              project.
            </li>
          </List>
          <span>Skills: C++, Python, Java, Vue, JavaScript</span>
        </Content>
      </Card>
      <Card>
        <Content>
          <Header>
            Global Data Insights and Analytics Intern @{" "}
            <a href="https://www.ford.com">Ford</a>
          </Header>
          <Team>Ford Credit, Pricing Analytics Team</Team>
          <span>May 2017 - Aug 2017</span>
          <List>
            <li>
              Designed an interactive dashboard to visualize the effect of cash
              incentives for the marketing team to gain a better understanding
              of historical financing trends.
            </li>
          </List>
          <span>Skills: QlikView, SAS (Statistical Analysis System)</span>
        </Content>
      </Card>
    </Page>
  );
};

export default Resume;
