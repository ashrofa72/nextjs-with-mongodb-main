import Styles from '../styles/placeholder.module.css'
import tablets from './api/data/tablet.json'
import { useState } from 'react';



const tabletdata = () => {

    const stclasses =['Select Class',1,2,3,4,5,6,7]
    const [selectvalue,setselectvalue]=useState()
    const tabletsfilter=tablets.filter(tablet=>{return tablet.stclass===selectvalue})
    const tabletsfilteritems= tabletsfilter.length
    const tabletsfilter2 = tablets.filter(tablet => {return tablet.stname==tablet})
    console.log(tabletsfilter)
    console.log({tablets})
    const [tablet, setTablet] = useState('')
    return (
        <div>
            <div className={Styles.container}>
                <h1>Select Class Tablets Students Names</h1>
            </div>
            <div className={Styles.container}>
            <h3>Students Total: {tabletsfilteritems}</h3>
            </div>
            <div className={Styles.selectcontainer}> 
                <select className={Styles.select} onChange={(e)=> setselectvalue(e.target.value)}>
                    {stclasses.map(stclass => (
                        <option value={stclass}>{stclass}</option>
                    ))}
                </select>
            </div>
            
            <div className={Styles.selectcontainer}>
                
            <select className={Styles.select} onChange={(e) => setTablet(e.target.value)}>
                    {tabletsfilter.map(tablet => 
                        <>
                        <option key={tablet.id} value={tablet.stname}>{tablet.stserial} ---- {tablet.stname}</option>
                        
                        </>
                        
                    )}
                </select>
            </div>
            <div className={Styles.postcontainer}>
                <p>{tablet}</p>
                
            </div>
            
        </div>
    );
}

export default tabletdata;