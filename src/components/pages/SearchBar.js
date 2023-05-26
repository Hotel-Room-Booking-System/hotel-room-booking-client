import classes from "./SearchBar.module.css"

const SearchBar = () => {

 const card = `card ${classes.card1}`;
 const submit = `btn form-control ${classes.submit}`
 const label = `form-check-label ${classes.label}`

  return (
    <div className={classes.modal}>
    <h4 className="ms-2">Search rooms and see the prices</h4>
    <div class={card}>
    <form>
  <div class="row g-0 p-5">
  <div className="form-group col-md-3 col-sm-6 px-2">
        <label className={label} for="check-in">Check-In</label>
          <input  type="date" className="form-control clickable input-md" id="DtChkIn" placeholder="&#xf133;  Check-In"/>
        </div>
        <div className="form-group col-md-3 col-sm-6 px-2">
        <label className={label} for="check-out">Check-Out</label>
          <input type="date" className="form-control clickable input-md" id="DtChkOut" placeholder="&#xf133;  Check-Out"/>
        </div>
        <div className="form-group col-md-3 col-sm-6 pt-4 px-2">
          <input  type="number" className="form-control clickable input-md" id="room" placeholder="Number of Room"/>
        </div>
       
          <div className="form=group col-md-3 col-sm-6 pt-4 px-2">
          <input id="submit" type="submit" className={submit}  value="Search Room"/>
        </div>
  </div>
  </form>
</div>
    </div>
  )
}

export default SearchBar