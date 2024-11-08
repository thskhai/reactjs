import React from 'react'
import { useEffect, useState} from 'react'
import AxiosInstance from '../lib/Axiosintance';

function Home() {
    const banner = '/image/banner.jpg';
    const [listOfSp, setListofSp] = useState([]);
    useEffect(() => {
        const Sanphams = async () => {
            try {
                const result = await AxiosInstance().get('/sanpham');
                // console.log(result)
                setListofSp(result);
            } catch (error) {
                console.log(error);
            }
        }
        Sanphams();
    }, []);

  return (
    <div className="container">
        <header>
            <img src= {banner} alt ="s"/>
        </header>

<h1>danh sach sanpham</h1>
        <table width="100%"  border={1}>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Date_import</td>
                    <td>Viewsp</td>
                    <td>Mount</td>
                    <td>Action</td>
                </tr>
            </thead>
       <tbody>
        {   listOfSp.map((item, index) =>
            <tr key={index}>
            <td>{index + 1}</td>
            <td><img height={100} alt='' width={130} src={item.image}/></td>
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.Date_import}</td>
            <td>{item.Viewsp}</td>
            <td>{item.Mount}</td>   
            <td>{item.Sale}</td>       
           
            </tr>
            )}
        </tbody>
        </table>

    </div>
  )
}

export default Home