export default function Bill({ billAmount, onBillAmountChange }) {
  return (
    <div>
      <label>How much was the bill ?</label>
      <input
        type="text"
        min={0}
        value={billAmount}
        onChange={onBillAmountChange}
        placeholder="Bill Value"
      />
    </div>
  );
}
