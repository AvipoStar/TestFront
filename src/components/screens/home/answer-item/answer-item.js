import Stars from "../stars-item/stars-item";
function Answer(props)
{
    return(
        <div align="center">
            <p><b>{props.text}</b></p> 
            <Stars/><Stars/><Stars/><Stars/><Stars/>
        </div>
    )
}
export default Answer;