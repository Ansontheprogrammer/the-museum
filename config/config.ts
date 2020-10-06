export default process.env.NODE_ENV !== 'production' ? 
    {
        aeSystemURL: 'https://checkout-api.onrender.com',
        vendorEmail: 'ansonervin@gmail.com',
        aeEmail: 'ansonervin@gmail.com'
    } : {
        aeSystemURL: 'https://checkout-api.onrender.com',
        vendorEmail: 'esko831@gmail.com',
        aeEmail: 'anson.ervin@ansonervin.com'
    }