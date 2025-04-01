import clockImage from "../assets/clock.png";
export default function MyClockImage () {
return(
    <div className="w-full flex justify-center">
        <img src={clockImage} alt="an image of a clock" />
    </div>
)
}