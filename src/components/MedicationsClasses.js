import MedicationsClass from './MedicationsClass';
import {useEffect, useState} from "react";
import axios from "axios";

function MedicationsClasses() {
  const [responseData, setResponseData] = useState([]);
  const getData = async()=>{
    const response = await axios.get(`http://run.mocky.io/v3/a78af611-3af6-481c-98a0-ba04a5f7ce70`);
    const medicationsClasses = response.data.problems[0].Diabetes[0].medications[0].medicationsClasses[0];
    let data = [];
    for(let dataRecord in medicationsClasses){
    data.push({title: dataRecord, items:medicationsClasses[dataRecord]});
    }
    setResponseData(data);
  }
  useEffect(()=>{
    getData();
  },[]);

  return <>
    {responseData.map(classRecord => <MedicationsClass classData={classRecord}/>)}
    </>
}
export default MedicationsClasses;