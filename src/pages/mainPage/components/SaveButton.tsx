import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';
import saveLocalStorage from '../hooks/useSaveInformation';

export default function SaveButton({ hotelName, person, start, end }: any) {
  const onClickButton = saveLocalStorage(hotelName, person, {
    checkin: start,
    checkout: end,
  });

  const ToastPopup = () => {
    ToastsStore.info('호텔 예약이 완료되었습니다.');
  };

  return (
    <>
      <ReservationButton
        type="button"
        onClick={() => {
          onClickButton();
          ToastPopup();
        }}
      >
        예약
      </ReservationButton>
      <ToastsContainer
        store={ToastsStore}
        lightBackground
        position={ToastsContainerPosition.TOP_CENTER}
      />
    </>
  );
}
const ReservationButton = styled.button`
  font-size: 16px;
  min-width: 106px;
  height: 32px;
  margin: 30px;
  border-radius: 4px;
  color: white;
  background-color: ${palette.pointColor};
  cursor: pointer;
`;
