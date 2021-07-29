import React from 'react';
import styled from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styled.notification}>{message}</p>;
};
