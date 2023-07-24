import css from '../styles/Transactions.module.css'
import PropTypes from "prop-types"
export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
  <thead>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => 
                <tr key={id} className={css.tr}>
                    <td className={css.td}>{type}</td>
                    <td className={css.td}>{amount}</td>
                    <td className={css.td}>{currency}</td>
                </tr>
            )}
        </tbody>
</table>
)
TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}