'use server'
const handleSubmit = async (e) => {
    console.log(e);
    const name = e.get('Name');
    const email = e.get('Email');
    const total_amount = e.get('total_amount');
    const address = e.get('address');
    const phoneNumber = e.get('phoneNumber');


    const res = await fetch('https://mrs2api.vercel.app/api/v1/sslcommerz', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            total_amount,
            address,
            phoneNumber
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await res.json();
    console.log(result)
    return result.url;
}

export default handleSubmit;