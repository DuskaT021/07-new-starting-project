import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                {/* image upload 
                https://academind.com/tutorials/reactjs-image-upload/ */}
                <input type="url" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textare id="description" required rows="5" ></textare>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
};
export default NewMeetupForm;