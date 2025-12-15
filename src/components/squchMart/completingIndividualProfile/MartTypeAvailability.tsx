"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../../app/flags.css";
import { Form, Button, Dropdown } from "react-bootstrap";
// import ConfirmModal from "./ConfirmModal";
import Link from "next/link";
import MapLocation from "./MapLocation";
import OwnerImg from "../../../../public/images/profile-vendor.png";
import { DatePicker } from "rsuite";

interface Props {
  handleFinalSubmit: () => void;
}

const MartTypeAvailability: React.FC<Props> = ({ handleFinalSubmit }) => {
  /***check radio */
  const [selected, setSelected] = useState("Delivery only");
  /****check radio */

  const [time1, setTime1] = useState<Date | null>(null);
  const [time2, setTime2] = useState<Date | null>(null);

  return (
    <div className="card-box profile-availability  bg-transparent shadow-none ps-0 pt-0 pe-0">
      <Form>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="card-box p-16 profile-left-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-24">
                    <Form.Label>Mart/ Store Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Supreme Upper Crust"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-24">
                    <Form.Label>Mart/ Store Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="g7 10th St Osu, Accra, Ghana"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-24">
                    <Form.Label>Time-Zone</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>
                        GMT+02:00 - South Africa Standard Time (SAST)
                      </option>
                      <option>
                        GMT+02:00 - South Africa Standard Time (SAST)
                      </option>
                      <option>
                        GMT+02:00 - South Africa Standard Time (SAST)
                      </option>
                      <option>
                        GMT+02:00 - South Africa Standard Time (SAST)
                      </option>
                    </Form.Select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="location-map-outlate mb-24">
                    <h3>Your Mart / Store Location on the map</h3>
                    <p className="m-0 p-0 pt-2">
                      This will help your customers and squch riders to locate
                      your store
                    </p>
                  </div>
                </div>
                <div className="col-md-12 guest-details-form-sec">
                  <div className="form-group mb-4 position-relative">
                    <Form.Control type="text" placeholder="Search here" />
                    <Link
                      href=""
                      className="adult d-flex align-items-center gap-2 text-gray"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.375 2.525V1.25H10.625V2.525C12.3924 2.67255 14.0502 3.44164 15.3043 4.6957C16.5584 5.94975 17.3274 7.60764 17.475 9.375H18.75V10.625H17.475C17.3274 12.3924 16.5584 14.0502 15.3043 15.3043C14.0502 16.5584 12.3924 17.3274 10.625 17.475V18.75H9.375V17.475C7.60764 17.3274 5.94975 16.5584 4.6957 15.3043C3.44164 14.0502 2.67255 12.3924 2.525 10.625H1.25V9.375H2.525C2.67255 7.60764 3.44164 5.94975 4.6957 4.6957C5.94975 3.44164 7.60764 2.67255 9.375 2.525ZM9.375 3.78125C7.94051 3.92541 6.59996 4.56106 5.58051 5.58051C4.56106 6.59996 3.92541 7.94051 3.78125 9.375H5V10.625H3.78125C3.92541 12.0595 4.56106 13.4 5.58051 14.4195C6.59996 15.4389 7.94051 16.0746 9.375 16.2188V15H10.625V16.2188C12.0595 16.0746 13.4 15.4389 14.4195 14.4195C15.4389 13.4 16.0746 12.0595 16.2188 10.625H15V9.375H16.2188C16.0746 7.94051 15.4389 6.59996 14.4195 5.58051C13.4 4.56106 12.0595 3.92541 10.625 3.78125V5H9.375V3.78125Z"
                          fill="#3D3D3D"
                        />
                        <path
                          d="M7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10Z"
                          fill="#3D3D3D"
                        />
                      </svg>
                      Detect
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="map-sec mb-24">
                    <MapLocation />
                  </div>
                </div>
                <div className="col-md-12 text-center position-relative">
                  <div className="center-border mb-24">
                    <p className="">or directly enter the co-ordinates</p>
                    <span>&nbsp;</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-24">
                    <Form.Label className="d-none">
                      Mart Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Latitude" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-24">
                    <Form.Label className="d-none">
                      Mart Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Longitude" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="corder-border-box">
                    <div className="location-map-outlate mb-24">
                      <h3>Mart/ Store Owner Details</h3>
                      <p className="m-0 p-0 pt-2">
                        These will be used to share revenue related
                        communications
                      </p>
                    </div>
                    <div className="admin-owner-box d-flex align-items-center gap-2">
                      <div className="img-box">
                        <Image alt="" src={OwnerImg}></Image>
                      </div>
                      <div className="text-box">
                        <h6>Leonardo Jovanović</h6>
                        <p className="m-0 p-0 d-flex align-items-center gap-2">
                          <span>084 310 6626</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.98438 10.0001L8.99271 12.0167L13.0177 7.9834"
                              stroke="#23B674"
                              stroke-width="1.42857"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.95742 2.0416C9.53242 1.54993 10.4741 1.54993 11.0574 2.0416L12.3741 3.17493C12.6241 3.3916 13.0908 3.5666 13.4241 3.5666H14.8408C15.7241 3.5666 16.4491 4.2916 16.4491 5.17493V6.5916C16.4491 6.9166 16.6241 7.3916 16.8408 7.6416L17.9741 8.95827C18.4658 9.53327 18.4658 10.4749 17.9741 11.0583L16.8408 12.3749C16.6241 12.6249 16.4491 13.0916 16.4491 13.4249V14.8416C16.4491 15.7249 15.7241 16.4499 14.8408 16.4499H13.4241C13.0991 16.4499 12.6241 16.6249 12.3741 16.8416L11.0574 17.9749C10.4824 18.4666 9.54075 18.4666 8.95742 17.9749L7.64075 16.8416C7.39075 16.6249 6.92409 16.4499 6.59075 16.4499H5.14909C4.26575 16.4499 3.54075 15.7249 3.54075 14.8416V13.4166C3.54075 13.0916 3.36575 12.6249 3.15742 12.3749L2.03242 11.0499C1.54909 10.4749 1.54909 9.5416 2.03242 8.9666L3.15742 7.6416C3.36575 7.3916 3.54075 6.92493 3.54075 6.59993V5.1666C3.54075 4.28327 4.26575 3.55827 5.14909 3.55827H6.59075C6.91575 3.55827 7.39075 3.38327 7.64075 3.1666L8.95742 2.0416Z"
                              stroke="#23B674"
                              stroke-width="1.42857"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </p>
                        <p className="m-0 p-0 d-flex align-items-center gap-2">
                          <span>Jhondoe@gmail.com</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.98438 10.0001L8.99271 12.0167L13.0177 7.9834"
                              stroke="#23B674"
                              stroke-width="1.42857"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.95742 2.0416C9.53242 1.54993 10.4741 1.54993 11.0574 2.0416L12.3741 3.17493C12.6241 3.3916 13.0908 3.5666 13.4241 3.5666H14.8408C15.7241 3.5666 16.4491 4.2916 16.4491 5.17493V6.5916C16.4491 6.9166 16.6241 7.3916 16.8408 7.6416L17.9741 8.95827C18.4658 9.53327 18.4658 10.4749 17.9741 11.0583L16.8408 12.3749C16.6241 12.6249 16.4491 13.0916 16.4491 13.4249V14.8416C16.4491 15.7249 15.7241 16.4499 14.8408 16.4499H13.4241C13.0991 16.4499 12.6241 16.6249 12.3741 16.8416L11.0574 17.9749C10.4824 18.4666 9.54075 18.4666 8.95742 17.9749L7.64075 16.8416C7.39075 16.6249 6.92409 16.4499 6.59075 16.4499H5.14909C4.26575 16.4499 3.54075 15.7249 3.54075 14.8416V13.4166C3.54075 13.0916 3.36575 12.6249 3.15742 12.3749L2.03242 11.0499C1.54909 10.4749 1.54909 9.5416 2.03242 8.9666L3.15742 7.6416C3.36575 7.3916 3.54075 6.92493 3.54075 6.59993V5.1666C3.54075 4.28327 4.26575 3.55827 5.14909 3.55827H6.59075C6.91575 3.55827 7.39075 3.38327 7.64075 3.1666L8.95742 2.0416Z"
                              stroke="#23B674"
                              stroke-width="1.42857"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="profile-owner card-box p-16">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="location-map-outlate mb-24">
                    <h3>Describe Your Mart Or Grocery Store</h3>
                  </div>
                  <div className="checkbox-inline ">
                    <div className="customise-status w-100">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch4"
                        label="Supermarket"
                        checked
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch5"
                        label="Mini Mart"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch6"
                        label="Organic Food Store"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch7"
                        label="Beverage Store"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch8"
                        label="Wholesale Grocery Supplier"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch9"
                        label="Local Kirana Store"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch10"
                        label="Online Grocery Delivery Mart"
                      />
                    </div>
                  </div>
                  <Link className="seeAll" href="">
                    See All
                  </Link>
                </div>

                <div className="col-md-12 mb-4">
                  <div className="location-map-outlate mb-24">
                    <h3>Choose categories</h3>
                  </div>
                  <div className="checkbox-inline ">
                    <div className="customise-status w-100">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch13"
                        label="Dairy"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch14"
                        label="Packed Food"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch15"
                        label="Masalas"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch16"
                        label="Fresh Fruits"
                        checked
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch17"
                        label="Cereals and Breakfast"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch18"
                        label="Biscuits and Cakes"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch19"
                        label="Meat and Seafood"
                      />
                    </div>
                  </div>
                  <Link className="seeAll" href="">
                    See All
                  </Link>
                </div>

                <div className="col-md-12">
                  <div className="location-map-outlate mb-24">
                    <h3>Mark availability</h3>
                    <p className="m-0 p-0 pt-2">
                      Don’t forget to uncheck your day off
                    </p>
                  </div>
                  <div className="checkbox-inline ">
                    <div className="customise-status w-100">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch22"
                        label="Monday"
                        checked
                      />
                    </div>
                    <div className="timmer-box-mid row">
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <Form.Label className="d-none">Start time</Form.Label>
                          <DatePicker
                            className="w-100"
                            format="HH:mm:ss"
                            value={time1}
                            placeholder="-- : -- --"
                            allowClear={false}
                            showHour
                            showMinute
                            showSecond
                            onChange={(value) => setTime1(value)}
                            shouldDisableHour={(hour) => hour < 8 || hour > 18}
                            shouldDisableMinute={(minute) => minute % 15 !== 0}
                            shouldDisableSecond={(second) => second % 30 !== 0}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <Form.Label className="d-none">End Time</Form.Label>
                          <DatePicker
                            className="w-100"
                            format="HH:mm:ss"
                            value={time2}
                            placeholder="-- : -- --"
                            allowClear={false}
                            showHour
                            showMinute
                            showSecond
                            onChange={(value) => setTime2(value)}
                            shouldDisableHour={(hour) => hour < 8 || hour > 18}
                            shouldDisableMinute={(minute) => minute % 15 !== 0}
                            shouldDisableSecond={(second) => second % 30 !== 0}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch23"
                        label="Tuesday"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch24"
                        label="Wednesday"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch25"
                        label="Thursday"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch26"
                        label="Friday"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch27"
                        label="Saturday"
                      />
                    </div>
                    <div className="customise-status">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch28"
                        label="Sunday"
                      />
                    </div>
                  </div>

                  <div className="checkbox-inline d-flex align-items-center gap-2">
                    <div className="customise-status small-text">
                      <Form.Check
                        type="checkbox"
                        id="custom-switch29"
                        label="Please confirm that you meet hygiene and quality standards." checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-step-form d-flex justify-content-end">
          <Button
            variant="primary"
            onClick={handleFinalSubmit}
            className="btn btn-next-box"
          >
            Save & Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MartTypeAvailability;
