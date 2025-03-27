import clockImage from "../assets/clock.png";
export default function MyClockImage () {
return(
    <div className="w-150 flex justify-center">
        <img src={clockImage} alt="an image of a clock" />
    </div>
)
}