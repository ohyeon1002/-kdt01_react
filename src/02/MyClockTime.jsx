export default function MyClockTime () {
return(
    <span className="italic font-bold text-4xl bg-green-100">현재시각: {new Date().toLocaleTimeString()}</span>
)
}
