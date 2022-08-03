import { useState } from 'react';
import Card from './shared/Card'    
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm ({handleAdd}) {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState (true);
    const [rating, setRating] = useState (10)
    const [message, setMessage] = useState ('');

    const handleTextChange = (e) => {
        if(text == '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true)
            setMessage('text atleast must be 10 character')
        }
        else {
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            //SO HERE HOW WE SEND DATA AS OBJECT WHEN CLICK ON SUBMIT BUTTON
            const newFeedback = {
                text,
                rating,
            }

            //We get this function from App js as props
            handleAdd(newFeedback)
            //To Just clear the input values
            setText('')
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h1>How would you rate your service with us?</h1>
                <RatingSelect select={(rating)=> setRating(rating)} />
                <div className='input-group'>
                    <input type="text" onChange={handleTextChange} placeholder='write a review' value={text} />                    
                    <Button onChange={handleTextChange} type="submit" version="primary" isDisabled={btnDisabled}>Send</Button>                    
                </div> 
                <span>{message && <div className='message'>{message}</div>}</span>
            </form>
        </Card>
    )
}

export default FeedbackForm;