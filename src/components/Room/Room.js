import classes from './Room.module.css'
import room1 from '../images/outdoor1.webp'
import room2 from '../images/outdoor2.webp'
import room3 from '../images/outdoor3.jpg'
import room4 from '../images/outdoor4.jpg'
import { Link } from 'react-router-dom'



const Room = () => {

  const card =` row my-5 ${classes.cardsize}`
  const card1 = `card ${classes.card1}`
  const image = `img-fluid px-3 pt-3 ${classes.img}`

  
  // const [isModalOpen,setModalOpen]= useState(false)

  // function detailHandler(){
  //   setModalOpen(true)
  // }

  // function closeHandler(){
  //   setModalOpen(false);
  // }

  // console.log("isModalOpen :"+isModalOpen)
  
  return (
    <section>
      
        <div className={card}>
          <div className='col-sm-6 col-md-3 my-2'>
              <div className={card1}>
              <div className='card-title'>
              <Link to='/room-detail'> 
               <img className={image} src={room1} alt='hotel room' />
               </Link>
               
               {/* {isModalOpen && <RoomDetail/>}
               {isModalOpen && <BackDrop onDrop={closeHandler}/>}  */}
             
              </div>
                <div className='card-body'>
                  <h4>Deluxe Twin Room</h4>
                  <p>MMK 260,862Price</p>
                  <small className='text-danger'> Only 7 left on our site</small>
                </div>
              </div>
          </div>
          <div className='col-sm-6 col-md-3 my-2'>
          <div className={card1}>
              <div className='card-title'>
              <Link to='/room-detail'> <img className={image} src={room2} alt='hotel room' /></Link>
              
              </div>
                <div className='card-body'>
                  <h4>Premier Lake Twin</h4>
                  <p>MMK 260,862Price</p>
                  <small className='text-danger'> Only 7 left on our site</small>
                </div>
              </div>
          </div>
          <div className='col-sm-6 col-md-3 my-2'>
          <div className={card1}>
              <div className='card-title'>
              <Link to='/room-detail'> <img className={image} src={room3} alt='hotel room' /></Link>
             
              </div>
                <div className='card-body'>
                  <h4>Superior Suite</h4>
                  <p>MMK 260,862Price</p>
                  <small className='text-danger'> Only 7 left on our site</small>
                </div>
              </div>
          </div>
          <div className='col-sm-6 col-md-3 my-2'>
          <div className={card1}>
              <div className='card-title'>
              <Link to='/room-detail'> <img className={image} src={room4} alt='hotel room' /></Link>
             
              </div>
                <div className='card-body'>
                  <h4>Junior Suite</h4>
                  <p>MMK 260,862Price</p>
                  <small className='text-danger'> Only 7 left on our site</small>
                </div>
              </div>
          </div>
        </div>
      
    </section>
  )
}

export default Room