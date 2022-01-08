
function App(){
    const title =  'My Feedback application here';
    const body = "This is my blog post";

    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]

    const showcomment = true;

    const commentBlock = (<ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>)

    return(
        <>
            {title} <br /> {body} <br />

            {showcomment && commentBlock}
            
        </>
    )
}

export default App;