export default function Output({ billAmount, percentage, friendPercentage }) {
  const averagePercentage = (percentage + friendPercentage) / 2;
  const tip = Math.round(billAmount * (averagePercentage / 100));
  const totalPrice = billAmount + tip;
  return (
    <h1>
      You pay ${totalPrice} (${billAmount} + ${tip} tip)
    </h1>
  );
}
