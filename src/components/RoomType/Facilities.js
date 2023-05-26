import classes from "./Facilities.module.css"

const Facilities = () => {
  const card = `card w-50 px-5 ${classes.modal}`
  return (
    <div class={card}>
    <div class="card-body">
      <h5 class="card-title">Guaranteed Amenities</h5>
      <ul>
        <li>Air-condition</li>
        <li>Bath Robes</li>
        <li>Breakfast</li>
        <li>Complimentary Instant Coffee/Tea</li>
        <li>Daily Housekeeping Service</li>
        <li>Desk and chair</li>
        <li>Hairdryer</li>
        <li>Internet Access (Complimentary)</li>
        <li>Shower</li>
        <li>Slippers</li>
        <li>Toiletries</li>
        <li>Towels</li>
        <li>Water Bottle</li>
      </ul>
      
    </div>
  </div>
  )
}

export default Facilities