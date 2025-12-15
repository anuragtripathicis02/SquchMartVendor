'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Image from "next/image";
import { Form } from 'react-bootstrap'

const CustomizeAddOn = () => {
     const inputRef = useRef<HTMLInputElement>(null);
        const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    
        const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) setUploadedFile(file);
        };
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setUploadedFile(file);
        };
    
        const triggerUpload = () => {
        inputRef.current?.click();
        };

  return (
    <div className="customize-add-sec card-box p-16">
      <div className="row">
        <div className="col-md-12 mb-3">
            <h2>Customize Add-on</h2>
        </div>
        <div className='col-md-12 mt-2'>
            <div className='upload-list-add-on d-flex flex-md-nowrap flex-wrap justify-content-between gap-lg-3 gap-2'>
                <div className='upload-img-add-on position-relative'>
                    <Form.Label className='d-none'>Upload CSV file</Form.Label>
                    <div onClick={triggerUpload}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-upload text-center d-flex align-items-center border-0 justify-content-center"
                    style={{
                        height: '90px',
                        width: '90px',
                        aspectRatio: '3 / 1',
                        cursor: 'pointer',
                    }}
                    >
                    <div className="text-muted">
                        <div className="">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><rect x="0.398438" y="0.400391" width="27.2" height="27.2" rx="13.6" fill="#E2E2E2"/><path d="M10.6056 20.4758H17.3927C19.1801 20.4758 19.8925 19.3813 19.9767 18.0472L20.3134 12.6979C20.4041 11.2991 19.2902 10.1139 17.8849 10.1139C17.4898 10.1139 17.1271 9.88725 16.9458 9.53753L16.4795 8.59849C16.1816 8.00915 15.4045 7.52344 14.7439 7.52344H13.2609C12.5938 7.52344 11.8167 8.00915 11.5188 8.59849L11.0525 9.53753C10.8711 9.88725 10.5085 10.1139 10.1134 10.1139C8.70809 10.1139 7.59419 11.2991 7.68486 12.6979L8.02162 18.0472C8.09933 19.3813 8.81819 20.4758 10.6056 20.4758Z" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.0273 11.4102H14.9702" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9993 17.8853C15.1585 17.8853 16.1041 16.9398 16.1041 15.7805C16.1041 14.6213 15.1585 13.6758 13.9993 13.6758C12.8401 13.6758 11.8945 14.6213 11.8945 15.7805C11.8945 16.9398 12.8401 17.8853 13.9993 17.8853Z" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                        </div>
                        {uploadedFile ? (
                            uploadedFile.name
                        ) : (
                            <></>
                        )}
                    </div>
                    <Form.Control
                        type="file"
                        onChange={handleChange}
                        ref={inputRef}
                        className="d-none"
                    />
                    </div>
                </div>
                <div className="form-box-right w-100">
                    <div className="form-group mb-24">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Extra Cheese" />
                    </div>
                </div>
                <div className="form-box-right w-100">
                    <div className="form-group mb-24">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="₵20.00" />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-12 mt-2'>
            <div className='upload-list-add-on d-flex flex-md-nowrap flex-wrap justify-content-between gap-lg-3 gap-2'>
                <div className='upload-img-add-on position-relative'>
                    <Form.Label className='d-none'>Upload CSV file</Form.Label>
                    <div onClick={triggerUpload}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-upload text-center d-flex align-items-center border-0 justify-content-center"
                    style={{
                        height: '90px',
                        width: '90px',
                        aspectRatio: '3 / 1',
                        cursor: 'pointer',
                    }}
                    >
                    <div className="text-muted">
                        <div className="">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><rect x="0.398438" y="0.400391" width="27.2" height="27.2" rx="13.6" fill="#E2E2E2"/><path d="M10.6056 20.4758H17.3927C19.1801 20.4758 19.8925 19.3813 19.9767 18.0472L20.3134 12.6979C20.4041 11.2991 19.2902 10.1139 17.8849 10.1139C17.4898 10.1139 17.1271 9.88725 16.9458 9.53753L16.4795 8.59849C16.1816 8.00915 15.4045 7.52344 14.7439 7.52344H13.2609C12.5938 7.52344 11.8167 8.00915 11.5188 8.59849L11.0525 9.53753C10.8711 9.88725 10.5085 10.1139 10.1134 10.1139C8.70809 10.1139 7.59419 11.2991 7.68486 12.6979L8.02162 18.0472C8.09933 19.3813 8.81819 20.4758 10.6056 20.4758Z" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.0273 11.4102H14.9702" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9993 17.8853C15.1585 17.8853 16.1041 16.9398 16.1041 15.7805C16.1041 14.6213 15.1585 13.6758 13.9993 13.6758C12.8401 13.6758 11.8945 14.6213 11.8945 15.7805C11.8945 16.9398 12.8401 17.8853 13.9993 17.8853Z" stroke="#5D5D5D" stroke-width="0.971429" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                        </div>
                        {uploadedFile ? (
                            uploadedFile.name
                        ) : (
                            <></>
                        )}
                    </div>
                    <Form.Control
                        type="file"
                        onChange={handleChange}
                        ref={inputRef}
                        className="d-none"
                    />
                    </div>
                </div>
                <div className="form-box-right w-100">
                    <div className="form-group mb-24">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Extra Cheese" />
                    </div>
                </div>
                <div className="form-box-right w-100">
                    <div className="form-group mb-24">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="₵20.00" />
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-12">
            <Link className="btn-add d-flex justify-content-end" href="">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#652669"/><path d="M11.1992 16H20.7992" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20.8012V11.2012" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomizeAddOn