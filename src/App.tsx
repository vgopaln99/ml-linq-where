import * as React from 'react';
import './style.css';
import Enumerable from 'linq';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import ReactJson from 'react-json-view';

export default function App() {
  var array = [
    {
      id: '3234',
      reservation: {
        actual: '2023-06-02',
      },
      clearToDock: {
        estimated: '2023-07-04',
        initial: '2023-06-26',
      },
      coordinatedDock: {
        estimated: '2023-06-28',
      },
      expediteDock: {
        planned: '2023-06-01',
        estimated: '2023-06-28',
        initial: '2023-07-05',
      },
    },
    {
      id: '434',
      reservation: {
        actual: '2022-06-02',
      },
      clearToDock: {
        estimated: '2022-07-04',
        initial: '2022-06-26',
      },
      coordinatedDock: {
        estimated: '2022-06-28',
      },
      expediteDock: {
        planned: '2022-06-01',
        estimated: '2022-06-28',
        initial: '2022-07-05',
      },
    },
    {
      id: '434',
      reservation: {
        actual: '2021-06-02',
      },
      clearToDock: {
        estimated: '2021-07-04',
        initial: '2021-06-26',
      },
      coordinatedDock: {
        estimated: '2021-06-28',
      },
      expediteDock: {
        planned: '2021-06-01',
        estimated: '2021-06-28',
        initial: '2021-07-05',
      },
    },
    {
      id: '434',
      reservation: {
        actual: '2020-06-02',
      },
      clearToDock: {
        estimated: '2020-07-04',
        initial: '2020-06-26',
      },
      coordinatedDock: {
        estimated: '2020-06-28',
      },
      expediteDock: {
        planned: '2020-06-01',
        estimated: '2020-06-28',
        initial: '2020-07-05',
      },
    },
  ];
  const result = Enumerable.from(array)
    .where(
      (w) =>
        (w.expediteDock.planned >= '2023-07-10' ||
          w.expediteDock.planned <= '2023-06-01') &&
        w.reservation.actual >= '2021-06-02' &&
        w.clearToDock.estimated <= '2021-07-04'
    )
    .toArray();

  return (
    <div>
      <div>
        <h1>Where</h1>
        <div className="ag-theme-balham"></div>
        <div style={{ marginTop: '30px' }}>
          <ReactJson src={result} />
        </div>
      </div>
    </div>
  );
}
