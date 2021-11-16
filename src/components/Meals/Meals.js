import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <Fragment key="meals">
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
