'use client';

import Dropdown from 'react-bootstrap/Dropdown';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Earnings',
      data: [90, 70, 80, 110, 24, 200, 75, 160, 130, 190, 185, 80, 190],
      borderColor: '#7B61FF',
      backgroundColor: 'rgba(123, 97, 255, 0.2)',
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#7B61FF',
      pointBorderWidth: 1,
      pointHoverBackgroundColor: '#7B61FF',
      pointHoverRadius: 6,
    },
  ],
};

const options = {
responsive: true,
maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: { ticks: { color: '#666' } },
    y: { 
        beginAtZero: true, 
        ticks: { color: '#666' , stepSize: 50 } 
    },
  },
};

const AdminEarning = () => {
  return (
    <div className='card-box'>
      <div className='table-top d-flex align-items-center justify-content-between gap-3'>
        <div className='left-table position-relative'>
          <h2>Yearly sales</h2>
        </div>
        <div className='right-box d-flex align-items-center gap-2'>
          {/* <Dropdown className="dropdown-box">
            <Dropdown.Toggle id="dropdown-basic">
            Delivery
            </Dropdown.Toggle>
            <Dropdown.Menu className="fixed-box">
              <Dropdown.Item href="#">Delivery</Dropdown.Item>
              <Dropdown.Item href="#">Delivery</Dropdown.Item>
              <Dropdown.Item href="#">Delivery</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          <Dropdown className="dropdown-box">
            <Dropdown.Toggle id="dropdown-basic">
              2025
            </Dropdown.Toggle>
            <Dropdown.Menu className="fixed-box">
              <Dropdown.Item href="#">2021</Dropdown.Item>
              <Dropdown.Item href="#">2022</Dropdown.Item>
              <Dropdown.Item href="#">2023</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="w-100 p-0" style={{ height: "300px", width: "100%"}}>
        <Line data={data} options={options}  className='w-100'/>
      </div>
    </div>
  );
};

export default AdminEarning;