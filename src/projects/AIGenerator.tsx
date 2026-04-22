import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSkipLeftLine,
  RiSkipRightLine,
} from "@remixicon/react";
import ModelGeneratorImage from "../assets/projects/model-generator-image.png";
import { useFullWindow } from "../components/ProjectImages";
import styles from "./projects.module.css";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
`;

const Video = styled.video`
  width: 100%;
  object-fit: contain;
  min-width: 0;

  @media (min-width: 800px) {
    max-height: 400px;
  }

  @media print {
    width: 365px;
  }
`;

const Embla = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const ImageRow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  gap: 1em;
  width: 100dvh;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 0;
    width: 800px;
  }

  @media print {
    width: 730px;
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  min-width: 0;

  @media (min-width: 800px) {
    max-height: 400px;
  }

  @media print {
    width: 365px;
  }
`;

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
`;

const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
`;

const AIGenerator = () => {
  const isFullSized = useFullWindow();

  const miniEmbla = (
    <Embla>
      <EmblaViewport>
        <EmblaContainer>
          <EmblaSlide>
            <Video src="/videos/model-generator-vid.mp4" loop muted controls />
          </EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  );

  return (
    <>
      {isFullSized ? (
        <ImageRow>
          <>
            <Image src={ModelGeneratorImage} />
            <Video src="/videos/model-generator-vid.mp4" loop muted controls />
          </>
        </ImageRow>
      ) : (
        miniEmbla
      )}
      <div className={styles.content}>
        <h3 className={styles.header}>AI 3D Model Generator in Scenes</h3>
        <div className={styles.text}>
          <span>
            I designed the integration of Polycam's AI Model Generator within
            the Scenes feature. Scenes allow users to combine multiple 3D
            captures into one. Creating a seemless experience between this and
            our existing AI Model Generator allows someone to quickly create any
            new model they might want and have it automatically be added to the
            scene.
          </span>
          <span>
            This led to a consistent 37.15% increase in 3D generator usage.
          </span>
        </div>
      </div>
    </>
  );
};

export default AIGenerator;
