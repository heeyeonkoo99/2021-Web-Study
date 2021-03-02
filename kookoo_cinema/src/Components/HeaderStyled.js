import styled from "styled-components";
import oc from 'open-color';
import {CornflowerBlue, Coral} from "../Style";
import {shadow,media} from "../StyleUtil";

// 상단 고정, 그림자
export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}

`;
// 흰 배경, 내용 중간 정렬
export const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;
// 해더의 내용
export const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: inline-block;
    flex-direction: row;
    align-items: center;
    font-family:'Baloo',cursive
    padding-right: 1rem;
    padding-left: 1rem;
  
    ${media.wide`
    width: 992px;
    `}

    ${media.tablet`
    width: 100%;
    `}
`;

// 중간 여백
export const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
export const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

