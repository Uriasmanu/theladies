import styled from 'styled-components';
import PropTypes from 'prop-types'; // Importando PropTypes

const ContainerCard = styled.div`
  .card {
    max-width: 350px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
  }

  .card a {
    text-decoration: none;
  }

  .content {
    padding: 1.1rem;
  }

  .image {

    width: 350px;
  height: 350px;
  background-color: rgb(239, 205, 255);
  background-image: url(${(props) => props.$image});
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir o container */
  background-position: center; /* Centraliza a imagem no container */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563eb;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: 0.3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }
`;

const Cards = ({ title, description, image, link }) => {
  return (
    <ContainerCard $image={image}>
      <div className="card">
        <div className="image"></div>
        <div className="content">
          <a href="#">
            <span className="title">{title}</span>
          </a>
          <p className="desc">{description}</p>
          <a className="action" href={link}>
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </ContainerCard>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Cards;
