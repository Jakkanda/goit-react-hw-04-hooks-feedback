import React from 'react';
import styled from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedBack }) {
  return (
    <>
      {options?.map((elem, index) => {
        return (
          <button
            type="button"
            onClick={onLeaveFeedBack}
            key={index}
            className={styled.button}
          >
            {elem}
          </button>
        );
      })}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
