import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  width: 200px;
  min-height: 370px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #2c3e50;
  color: #ffffff;
  margin-bottom: 10px;
  border-radius: 4px;
  padding-bottom: 10px;
`;

export const CardMedia = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const CardTitle = styled.h6`
  color: #ffffff;
  font-size: 1.5rem;
  margin-top: 5px;
  margin-left: 10px;
`;

export const CardData = styled.div`
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const CharacterStatus = styled.div`
  width: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ status }) =>
    status === "Alive" ? "#2ecc71" : "#c0392b"};
  margin-right: 4px;
`;

export const CharacterCardPropertyLabel = styled.p`
  margin-top: 10px;
  color: rgb(158, 158, 158);
  margin-left: 10px;
`;

export const CharacterCardPropertyValue = styled.p`
  color: #ffffff;
  margin-left: 10px;
`;
