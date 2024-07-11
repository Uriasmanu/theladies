
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerCard = styled.div`
  .card {
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
  }

  .card a {
    text-decoration: none;
  }

  .content {
    padding: 1.1rem;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: rgb(239, 205, 255);
    background-image: ${({ image }) => image ? `url(${image})` : 'none'};
    background-size: cover;
    background-position: center;
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
    <ContainerCard image={image}>
      <div className="card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="content">
          <a href={link}>
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
