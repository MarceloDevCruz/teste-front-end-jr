import React, { FC, useState, useEffect } from 'react';
import ArrowRight from '../assets/main/ArrowRight.svg';
import ArrowLeft from '../assets/main/ArrowLeft.svg';

interface Props {
  limit: number;
  total: number;
  offSet: number;
  setOffSet: (value: number) => void;
}

const Pagination: FC<Props> = ({ limit, total, offSet, setOffSet }) => {
  const max_items = 3;
  const max_left = (max_items - 1) / 2;

  const actual_page = offSet ? offSet / limit + 1 : 1;
  const total_pages = Math.ceil(total / limit);
  const first_page = Math.max(total_pages - (max_items - 1), 1);

  const [arrRight, setArrRight] = useState(true);
  const [arrLeft, setArrLeft] = useState(false);

  useEffect(() => {
    if (actual_page === total_pages) {
      setArrRight(false);
    } else {
      setArrRight(true);
    }
  }, [offSet]);

  useEffect(() => {
    if (actual_page === 1) {
      setArrLeft(false);
    } else {
      setArrLeft(true);
    }
  }, [offSet]);

  return (
    <>
      {arrLeft && (
        <img
          src={ArrowLeft}
          alt="Arrow Left"
          className="pagination__left"
          onClick={() => setOffSet((actual_page - 2) * limit)}
        />
      )}

      {arrRight && (
        <img
          src={ArrowRight}
          alt="Arrow Right"
          className="pagination__right"
          onClick={() => setOffSet(actual_page * limit)}
        />
      )}
    </>
  );
};

export default Pagination;
