import Star from "./Star";

export default function Stars({ count = 0 }) {
  if (typeof count !== 'number' || count < 1 || count > 5) return;

  let starsArr = [];

  for (let i = 1; i <= count; i++) {
    starsArr.push(<Star key={i}/>);
  }

  return (
    <ul className="card-body-stars">
      {starsArr}
    </ul>
  );
}
