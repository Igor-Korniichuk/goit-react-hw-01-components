import PropTypes from 'prop-types';
import { TableTransaction, TableHead, TableBody, TableRow, TableHeader, TableData} from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return (
        <TableTransaction>
            <TableHead>
                <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
                </TableRow>
            </TableHead>

            <TableBody>{items.map(({id, type, amount, currency}) => (
                <TableRow key={id}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>))}  
            </TableBody>
        </TableTransaction>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};