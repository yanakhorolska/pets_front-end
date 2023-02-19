import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(17, 17, 17, 0.6);
    opacity: 1;
    transition: opacity 250ms cubic - bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
`;

export const Modal = styled.div`
    padding: 40px 20px;
    background-color: white;
    border-radius: 20px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    height: auto;
    @media (min-width: 768px) {
        width: 608px;
        padding: 40px 80px;
    }
`;
export const ModalLearnMore = styled.div`
    padding: 60px 20px 40px;
    background-color: white;
    border-radius: 20px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    height: auto;
    @media (min-width: 768px) {
        width: 704px;
        padding: 32px 20px;
    }
`;