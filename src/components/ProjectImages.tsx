import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSkipLeftLine,
  RiSkipRightLine,
} from "@remixicon/react";

const Embla = styled.div`
  margin: 0 auto;
  width: 100%;
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

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const Button = styled.button`
  border-radius: 8px;
  height: 32px;
  width: 100px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BREAKPOINT = 800;

export const useFullWindow = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width > BREAKPOINT;
};

const ProjectImages = ({
  image1,
  image2,
}: {
  image1: string;
  image2: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const isFullSized = useFullWindow();

  return isFullSized ? (
    <ImageRow>
      <Image src={image1} />
      <Image src={image2} />
    </ImageRow>
  ) : (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          <EmblaSlide>
            <Image src={image1} />
          </EmblaSlide>
          <EmblaSlide>
            <Image src={image2} />
          </EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>

      <Buttons>
        <Button onClick={() => emblaApi?.scrollPrev()}>
          <RiArrowLeftLine size={16} />
        </Button>
        <Button onClick={() => emblaApi?.scrollNext()}>
          <RiArrowRightLine size={16} />
        </Button>
      </Buttons>
    </Embla>
  );
};

export default ProjectImages;
