import PropTypes from 'prop-types'; 
import randomColor from 'helpers/randomColor';
import { StatisticsList, Title, StatItems, Label, Item, Percentage } from './Statistics.styled';

export default function Statistics({title, stats}) {
    return (<StatisticsList>
    {title && <Title>{title}</Title>}

  <StatItems>
    {stats.map((stat) => {
        return (<Item key={stat.id} backgroundColor={randomColor()}>                    
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </Item>);
            })
            }   
  </StatItems>
</StatisticsList>)
};

Statistics.propTypes = {
    tittle: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
  ).isRequired,
}