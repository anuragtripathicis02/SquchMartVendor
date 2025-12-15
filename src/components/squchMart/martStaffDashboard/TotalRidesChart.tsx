"use client";
import { Doughnut } from "react-chartjs-2";
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalRidesChart = () => {
  const data = {
    labels: ["Cancelled Orders", "Completed Orders", "On Going Orders"],
    datasets: [
      {
        data: [165, 145, 100], // Values from image
        backgroundColor: ["#DE0105", "#00C49F", "#FF8C00"], // Custom colors
        hoverBackgroundColor: ["#DE0105", "#4FC590", "#FF8211"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%", // Creates a donut effect
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        callbacks: {
          label: (tooltipItem) =>
            ` ${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="custom-card card-box p-16">
         <div className='table-top d-flex align-items-center justify-content-between gap-3'>
            <div className='left-table  position-relative'>
                <h2>Total Orders</h2>
            </div>
            <div className='dropdown-sec'>
                <Dropdown align={'end' } >
                    <Dropdown.Toggle  id="dropdown-basic">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.305 17.79C9.44147 17.8822 9.59482 17.9465 9.75623 17.9793C9.91765 18.0121 10.0839 18.0126 10.2456 17.9809C10.4072 17.9491 10.5609 17.8858 10.698 17.7945C10.8351 17.7031 10.9527 17.5856 11.0442 17.4487C11.1357 17.3117 11.1992 17.158 11.2311 16.9964C11.2631 16.8348 11.2627 16.6686 11.2301 16.5071C11.1976 16.3456 11.1334 16.1922 11.0414 16.0556C10.9493 15.9191 10.8312 15.802 10.6938 15.7113C10.4183 15.5419 10.0879 15.4859 9.77195 15.555C9.45604 15.6241 9.17921 15.8129 8.9996 16.0819C8.82 16.3508 8.7516 16.6788 8.80878 16.9971C8.86597 17.3154 9.04427 17.5992 9.30625 17.7888L9.305 17.79ZM10 11.75C9.66848 11.75 9.35054 11.6183 9.11612 11.3839C8.8817 11.1495 8.75 10.8315 8.75 10.5C8.75 10.1685 8.8817 9.85054 9.11612 9.61612C9.35054 9.3817 9.66848 9.25 10 9.25C10.3315 9.25 10.6495 9.3817 10.8839 9.61612C11.1183 9.85054 11.25 10.1685 11.25 10.5C11.25 10.8315 11.1183 11.1495 10.8839 11.3839C10.6495 11.6183 10.3315 11.75 10 11.75ZM10 5.5C9.66848 5.5 9.35054 5.3683 9.11612 5.13388C8.8817 4.89946 8.75 4.58152 8.75 4.25C8.75 3.91848 8.8817 3.60054 9.11612 3.36612C9.35054 3.1317 9.66848 3 10 3C10.3315 3 10.6495 3.1317 10.8839 3.36612C11.1183 3.60054 11.25 3.91848 11.25 4.25C11.25 4.58152 11.1183 4.89946 10.8839 5.13388C10.6495 5.3683 10.3315 5.5 10 5.5Z" fill="#161925"/></svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="fixed-box ">
                        <Dropdown.Item href="#">
                        Canalled 
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        Completed 
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        On Going 
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className="chart-box d-flex align-items-center justify-content-between">
            <div className="chart-container">
                <Doughnut data={data} options={options} />
            </div>
            <div className="chart-legend">
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#DE0105" }}></span>
                        <h5>Cancelled Orders: </h5>
                        <h6>165</h6>
                    </div>
                </div>
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#4FC590" }}></span>
                        <h5>Completed Orders: </h5>
                        <h6>145</h6>
                    </div>
                </div>
                <div className="legend-item d-flex gap-2">
                    <div className="legend-left">
                        <span className="legend-color" style={{ backgroundColor: "#FF8211" }}></span>
                        <h5>On Going Orders: </h5>
                        <h6>100</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TotalRidesChart;
