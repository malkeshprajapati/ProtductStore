import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 650px;
  //   height: 400px;
  overflow: hidden;
  position: relative;
  //   border: 2px solid #ccc;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 350px;
  transition: transform 0.5s ease;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

export {
  CarouselContainer,
  Image,
  Button,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot,
};
