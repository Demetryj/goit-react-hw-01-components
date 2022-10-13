import PropTypes from 'prop-types';
import { HeadRow, BodyRow } from './StyledTransactionHistory';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <HeadRow>Type</HeadRow>
          <HeadRow>Amount</HeadRow>
          <HeadRow>Currency</HeadRow>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <BodyRow>{type}</BodyRow>
            <BodyRow>{amount}</BodyRow>
            <BodyRow>{currency}</BodyRow>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
