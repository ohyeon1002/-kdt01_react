export default function TypeChecker({value, chk}) {
  return (
    <div className="m-3">
        <input type='radio' value={value} name='choice' onChange={e => chk(e.target.value)} id={value} className="mr-1.5" /><label htmlFor={value}>{value}</label>
    </div>
  )
}
