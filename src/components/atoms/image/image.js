import React from "react";
import styled from "styled-components";

const Image = ({ src, altText, ...props }) => {
  const { height, width, borderRadius } = props;
  return (
    <StyledImage
      src={src}
      altText={altText}
      className="image"
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

const StyledImage = styled.img.attrs(props => ({
  height: props.height,
  width: props.width,
  borderRadius: props.borderRadius
}))`
  height: ${props => (props.height ? `${props.height}rem` : "15rem")};
  width: ${props => (props.width ? `${props.width}rem` : `auto`)};
  border-radius: ${props =>
    props.borderRadius ? `${props.borderRadius}rem` : "100%"};
`;

export default Image;
