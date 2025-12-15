import Link from 'next/link'
import React from 'react'
import { Form } from 'react-bootstrap'

const WalletTopField = () => {
  return (
    <div className='walletTopBalance'>
        <div className='card-box inner-walletTop d-flex flex-wrap justify-content-between align-items-center gap-2 mb-md-5 mb-4'>
            <div className='wallet-balance'>
                <span className='text-purple'>Wallet Balance:</span>
                <h2>$12,765.00</h2>
            </div>
            <div className='wallet-pending'>
                <span className='text-yellow'>Pending Balance</span>
                <h2>$12,765.00</h2>
            </div>
            <div className='wallet-button'>
                <Form>
                    <ul className='d-flex align-items-center gap-2'>
                        <li>
                            <div className="form-group mb-0">
                                <Form.Label className='d-none'>Weekly Payout</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Weekly Payout</option>
                                    <option value="1">Weekly Payout one </option>
                                    <option value="2">Weekly Payout two</option>
                                </Form.Select>
                            </div>
                        </li>
                        <li>
                            <Link href="" className='btn btn-secondary'>Request Early Payout</Link>
                        </li>
                    </ul>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default WalletTopField