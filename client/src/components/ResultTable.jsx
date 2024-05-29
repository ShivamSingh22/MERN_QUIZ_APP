import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(`${import.meta.env.VITE_APP_SERVER_HOSTNAME}/api/results`, (res) => {
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name</td>
            <td>Attempts</td>
            <td>Earned Pts</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td>{v?.username || ''}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ''}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
