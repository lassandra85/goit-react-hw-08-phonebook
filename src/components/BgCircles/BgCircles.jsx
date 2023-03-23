import { createPortal } from 'react-dom';
import { Area, Circles, CirclesItem } from './BgCircles.styled';

const bgRoot = document.querySelector('#bg-root');

export const BgCircles = () => {
  return createPortal(
    <Area>
      <Circles>
        <CirclesItem>Україна-понад усе!</CirclesItem>
        <CirclesItem>Герої не вмирають!</CirclesItem>
        <CirclesItem>ПНХ</CirclesItem>
        <CirclesItem>Незалежність кожному регіону БОЛОТА!</CirclesItem>
        <CirclesItem>Крим-УКраїна!</CirclesItem>
        <CirclesItem>Слава Україні!</CirclesItem>
        <CirclesItem>Смерть ворогам!</CirclesItem>
        <CirclesItem>Ніхто не забутий!</CirclesItem>
        <CirclesItem>ЗСУ</CirclesItem>
        <CirclesItem>Україна-НЕНЬКА!</CirclesItem>
      </Circles>
    </Area>,
    bgRoot
  );
};