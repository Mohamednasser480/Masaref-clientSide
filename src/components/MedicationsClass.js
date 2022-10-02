function MedicationsClass(props) {

  return <>
    <h1>{props.classData.title}</h1>
    <ol>{
      Object.keys( props.classData.items[0]).map(classRecord=> <li>
        {classRecord}
            {props.classData.items[0][classRecord].map(subRecord=> <ul>
                <li> name: {subRecord.name}</li>
                <li>dose: {subRecord.dose || 'Unknown'}</li>
                <li>strength: {subRecord.strength}</li>
            </ul>
            )}
      </li>)}
    </ol>

  </>
}
export default MedicationsClass;