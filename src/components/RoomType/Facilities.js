import classes from "./Facilities.module.css"
import parse from "html-react-parser"

const Facilities = (props) => {

  const jsxElement = parse(props.facilities)

  const card = `card w-50 px-5 ${classes.modal}`
  return (
    <div class={card}>
    <div class="card-body">
      <h5 class="card-title">Guaranteed Amenities</h5>
     
      {jsxElement}
    </div>
  </div>
  )
}

export default Facilities