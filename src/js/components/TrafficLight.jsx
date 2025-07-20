
export const TrafficLight = ({ color, onSetColor }) => {

    return (
        <>
            <div className={`light red${color === "red" ? " selected" : ""}`} onClick={() => onSetColor('red')}></div>
            <div className={`light yellow${color === "yellow" ? " selected" : ""}`} onClick={() => onSetColor('yellow')}></div>
            <div className={`light green${color === "green" ? " selected" : ""}`} onClick={() => onSetColor('green')}></div>
        </>
    )
}