import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMenuContext } from '../../../../../Context';


const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200%;
  background: #FFFAFA;
  animation: ${({ $estaAberto }) => ($estaAberto ? slideIn : slideOut)} 0.3s ease-in-out;
  display: ${({ $isAnimating, $estaAberto }) => (!$estaAberto && !$isAnimating ? 'none' : 'flex')};
  flex-direction: column;
  padding: 9% 5%;
  z-index: 2;
  align-items: flex-start;

  .group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 230px;
}

.input {
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  width: 100%;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #FCDCCD;
  color: #0d0c22;
  box-shadow: 0 0 5px #fff0e9, 0 0 0 10px #f5f5f5eb;
  transition: .3s ease;
}

.input::placeholder {
  color: #B57D62;
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #B57D62;
  width: 1rem;
  height: 1rem;
}



`;

const MenuAberto = () => {
    const { estaAberto, isAnimating, setIsAnimating } = useMenuContext();

    useEffect(() => {
        if (!estaAberto && isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300); // Duração da animação

            return () => clearTimeout(timer);
        }
    }, [estaAberto, isAnimating, setIsAnimating]);

    return (
        <MenuContainer $estaAberto={estaAberto} $isAnimating={isAnimating}>

            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input placeholder="Search" type="search" className="input"/>
            </div>
        </MenuContainer>
    );
};

export default MenuAberto;
