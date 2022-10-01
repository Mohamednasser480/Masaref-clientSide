function MedicationsClass(props) {
  return <>
    <h1>{props.classData.title}</h1>
    {Object.keys( props.classData.items[0]).map(classRecord=> <li>{classRecord}</li>)}
  </>
}
export default MedicationsClass;