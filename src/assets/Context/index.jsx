import { createContext, useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do contexto básico
export const Context = createContext(undefined);

// Provider do contexto básico
export const Provider = ({ children }) => {
  return (
    <Context.Provider value={null}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Criação do contexto do carrossel
export const CarouselContext = createContext(undefined);

// Criação do contexto do menu
export const MenuContext = createContext(undefined);

// Hook para acessar o contexto do carrossel
export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider');
  }
  return context;
};

// Hook para lidar com eventos de scroll no carrossel
export const useCarouselScroll = () => {
  const carrosselRef = useRef(null);

  // Função para lidar com o evento de rolagem
  const handleScroll = (event) => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollLeft += event.deltaY > 0 ? 1000 : -1000;
    }
    event.preventDefault();
  };

  // Efeito para adicionar/remover o listener de eventos de roda
  useEffect(() => {
    const container = carrosselRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return { carrosselRef };
};

// Hook para acessar o contexto do menu
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext deve ser usado dentro de um MenuProvider');
  }
  return context;
};

// Provider geral que encapsula todos os providers
export const AppProvider = ({ children }) => {
  const [estaAberto, setEstaAberto] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const abrirMenu = () => {
    if (!estaAberto) {
      setIsAnimating(true);
    }
    setEstaAberto(!estaAberto);
  };

  useEffect(() => {
    if (!estaAberto && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duração da animação

      return () => clearTimeout(timer);
    }
  }, [estaAberto, isAnimating]);

  return (
    <Provider>
      <CarouselContext.Provider value={null}>
        <MenuContext.Provider value={{ estaAberto, abrirMenu, isAnimating, setIsAnimating }}>
          {children}
        </MenuContext.Provider>
      </CarouselContext.Provider>
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
