import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  StatLabel,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils/randomcolor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <span>{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
