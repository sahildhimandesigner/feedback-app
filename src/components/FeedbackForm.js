import { useState } from 'react';
import Card from './shared/Card'    
import Button from './shared/Button';

function FeedbackForm () {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState (true);
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

    return(
        <Card>
            <form>
                <h1>How would you rate your service with us?</h1>

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