'use client'

import client from '@/app/axiosClient';
import React from 'react'

const Checkout = () => {

    const handlePayment = async () => {
        const res: any = await client.post(
            `/cashfree/create-order-web`,
            {
                id: 166,
                email_id: "test@test.com",
                name: "Vikas Yadav",
                mobile_number: "7291014972",
                amount: 1
            }
        );

        const data = res?.data;
        console.log(data, '<-- payment data')

        const cashfree = new (window as any).Cashfree({
            mode: "production" // SAME as mobile
        });

        cashfree.checkout({
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_modal"
        });
    };
    return (
        <div>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    )
}

export default Checkout