import {useDispatch, useSelector} from 'react-redux'
//import {Notification} from '../reducers/notificationReducer'
import { connect } from "react-redux";

const Notification = (props) => {
  //const notification = useSelector(state=>state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}


const mapStatetoProps = state =>{
 return {
  notification: state.notification
 }
}



const ConnectedNotification = connect(mapStatetoProps)(Notification)

export default ConnectedNotification