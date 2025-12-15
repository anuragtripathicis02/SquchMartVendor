"use client"; 
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Dropdown from 'react-bootstrap/Dropdown';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Finish",
        data: [50, 55, 20, 30, 20, 10, 80, 8, 20, 50, 5, 90], // Sample Data
        backgroundColor: "#03DAC5",
        borderRadius: 50,
        barThickness: 4,
      },
      {
        label: "Cancel",
        data: [10, 30, 25, 10, 90, 20, 50, 75, 80, 40, 85, 60], // Sample Data
        backgroundColor: "#E03C22",
        borderRadius: 50,
        barThickness: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
            usePointStyle: true, 
            pointStyle: "circle", 
            padding: 10, 
            boxWidth: 7, 
            boxHeight: 7, 
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        // min: 25,
        max: 100,
        ticks: {
            stepSize: 25,
          },
      },
    },
  };

  return (
    <div className="cart-line-box card-box p-16">
        <div className='table-top d-flex align-items-center justify-content-between gap-3'>
            <div className='left-table  position-relative'>
                <h2>Orders Statistics</h2>
            </div>
            <div className='right-box'>
                <Dropdown className="dropdown-box">
                    <Dropdown.Toggle id="dropdown-basic">
                        2025
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="fixed-box">
                        <Dropdown.Item href="#">
                            2021
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            2022
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            2023
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      <div className="" style={{ height: "212px", width: "100%"}}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
