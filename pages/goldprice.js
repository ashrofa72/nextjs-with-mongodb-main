export const getStaticProps = async () => {
    const res = await fetch('https://data-asg.goldprice.org/dbXRates/EGP');
    const res2 = await fetch('https://data-asg.goldprice.org/dbXRates/USD');
    const data = await res.json();
    const data2 = await res2.json();
    return {
        props: { goldprices: data.items[0].xauPrice, golddate: data.date,goldprices2: data2.items[0].xauPrice}
        

    }
}



const goldprice = ({ goldprices, golddate ,goldprices2}) => {
    return (
        <div>
            <h1 style={{color: 'red',textDecoration: 'underline'}}>Gold Prices</h1>
            
                <div>
                    <h3>{`Date: ${golddate}`}</h3>
                    <h3>{`Egyptian Pound: ${goldprices}`}</h3>
                    <h3>{`USD Dollar: ${goldprices2}`}</h3>
                </div>
           
        </div>
    )
}

export default goldprice