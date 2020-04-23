// import Ravepay from './../rave'

// const public_key = 'FLWPUBK-efd097a0948fc5b82de0f2132106c9ed-X'
// const secrete = 'FLWSECK-93d676cd3274366f222cc6391a3a778b-X'

// const rave = new Ravepay(public_key,secrete,false)
// const charge = async(data) => {
//     const {cardno,cvv,expirymonth,expiryyear,amount,email,phonenumber,lastname,firstname} = data
//     try {
               
//         const chargeCard = await rave.Card.charge({
//             "cardno": cardno,
//             "cvv": cvv,
//             "expirymonth": expirymonth,
//             "expiryyear": expiryyear,
//             "currency": "NGN",
//             "country": "NG",
//             "amount": amount,
//             "email": email,
//             "phonenumber": phonenumber,
//             "firstname": firstname,
//             "lastname": lastname,
//             "IP": "355426087298442",
//             "txRef": "MC-" + Date.now(),// your unique merchant reference
//             "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
//             "redirect_url": "",
//             "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"

//         })
//         return chargeCard
//     } catch (error) {
//         console.log("charge")
//         console.log(error.message)
    
//     }
// }
// export default charge