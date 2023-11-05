import css from './Statistics.module.css';

export default function StatisticsItem(props) {
  const { title, value } = props;
  return (
    <li className={css.statistics__item}>
      <p>
        {title}: {value}
      </p>
    </li>
  );
}
