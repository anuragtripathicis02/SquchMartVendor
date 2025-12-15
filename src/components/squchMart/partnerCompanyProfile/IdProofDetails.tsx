'use client'
import DatePickers from '@/components/DatePickers'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap'
import '../../../app/flags.css';

const IdProofDetails = () => {
    
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
    <div className='operatorProfile-from mb-4'>
        <div className='from-bottom-box'>
            <Form>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card-box '>
                            <div className='top-change-box d-flex align-items-center justify-content-between gap-2 mb-3'>
                                <h4>User ID Proof</h4>
                                <Link href="" className='btn btn-border d-flex align-items-center gap-2 rounded-2'>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3346 10.0827C18.1105 8.46952 17.3621 6.97485 16.2049 5.82886C15.0477 4.68288 13.5457 3.94917 11.9305 3.74075C10.3153 3.53233 8.67629 3.86077 7.26607 4.67547C5.85585 5.49017 4.75261 6.74593 4.1263 8.24932M3.66797 4.58266V8.24932H7.33464M3.66797 11.916C3.89215 13.5291 4.64049 15.0238 5.79772 16.1698C6.95494 17.3158 8.45686 18.0495 10.0721 18.2579C11.6873 18.4663 13.3263 18.1379 14.7365 17.3232C16.1468 16.5085 17.25 15.2527 17.8763 13.7493M18.3346 17.416V13.7493H14.668" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    <span>Change</span>
                                </Link>
                            </div>
                            <div className="form-group mb-24">
                                <Form.Label>Upload User ID</Form.Label>
                                <div onClick={triggerUpload} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="border-upload text-center d-flex align-items-center justify-content-center" style={{ height: '250px', width: '100%', aspectRatio: '3 / 1', cursor: 'pointer', }}>
                                    <div className="text-muted small">
                                        <div className="fs-4">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20.0001C5.45 20.0001 4.97933 19.8044 4.588 19.4131C4.19667 19.0217 4.00067 18.5507 4 18.0001V16.0001C4 15.7167 4.096 15.4794 4.288 15.2881C4.48 15.0967 4.71733 15.0007 5 15.0001C5.28267 14.9994 5.52033 15.0954 5.713 15.2881C5.90567 15.4807 6.00133 15.7181 6 16.0001V18.0001H18V16.0001C18 15.7167 18.096 15.4794 18.288 15.2881C18.48 15.0967 18.7173 15.0007 19 15.0001C19.2827 14.9994 19.5203 15.0954 19.713 15.2881C19.9057 15.4807 20.0013 15.7181 20 16.0001V18.0001C20 18.5501 19.8043 19.0211 19.413 19.4131C19.0217 19.8051 18.5507 20.0007 18 20.0001H6ZM11 7.85006L9.125 9.72506C8.925 9.92506 8.68767 10.0211 8.413 10.0131C8.13833 10.0051 7.90067 9.90073 7.7 9.70006C7.51667 9.50006 7.42067 9.26673 7.412 9.00006C7.40333 8.7334 7.49933 8.50006 7.7 8.30006L11.3 4.70006C11.4 4.60006 11.5083 4.5294 11.625 4.48806C11.7417 4.44673 11.8667 4.42573 12 4.42506C12.1333 4.4244 12.2583 4.4454 12.375 4.48806C12.4917 4.53073 12.6 4.6014 12.7 4.70006L16.3 8.30006C16.5 8.50006 16.596 8.7334 16.588 9.00006C16.58 9.26673 16.484 9.50006 16.3 9.70006C16.1 9.90006 15.8627 10.0044 15.588 10.0131C15.3133 10.0217 15.0757 9.92573 14.875 9.72506L13 7.85006V15.0001C13 15.2834 12.904 15.5211 12.712 15.7131C12.52 15.9051 12.2827 16.0007 12 16.0001C11.7173 15.9994 11.48 15.9034 11.288 15.7121C11.096 15.5207 11 15.2834 11 15.0001V7.85006Z" fill="#838383"/></svg>
                                        </div> {uploadedFile ? uploadedFile.name : 'Click To Upload Media File Or Drag And Drop Your File Here...'}
                                    </div>
                                    <Form.Control type="file" onChange={handleChange} ref={inputRef} className="d-none"/>
                                </div>
                            </div>
                            <div className="form-group mb-0">
                                <Form.Label>User Id Number</Form.Label>
                                <Form.Control type="text" placeholder='12345678901234' />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default IdProofDetails