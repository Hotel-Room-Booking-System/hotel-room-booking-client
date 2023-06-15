import classes from './ConfirmModal.module.css'

const Alert = (props) => {
 
    function onCancel(){
        props.onCancel();
    }

    const buttonClasses = classes.btn+' '+classes['btn--alt']

    return (
        <div className={classes.modal}>
            <p>This room type has room. So, can't delete.</p>
            <button className={buttonClasses} onClick={onCancel}>OK</button>
           
        </div>
    );
  
}

export default Alert