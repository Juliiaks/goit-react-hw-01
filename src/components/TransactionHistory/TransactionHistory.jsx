import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.tableTr}>Type</th>
      <th className={css.tableTr}>Amount</th>
      <th className={css.tableTr}>Currency</th>
    </tr>
  </thead>

     <tbody>
    {items.map((item, id)=> (    
    <tr  className={css.tableLine} key={id}>
      <td className={css.tableTr}>{item.type}</td>
      <td className={css.tableTr}>{item.amount}</td>
      <td className={css.tableTr}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    ) 
}