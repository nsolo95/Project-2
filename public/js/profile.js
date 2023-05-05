const newPostHandler = async (event) => {
    event.preventDefault(); 
    console.log('AAAAAAAAAAAAAAAAA')

    const yourPostTitle = document.querySelector('#post-title').value.trim();
    const yourPostDesc = document.querySelector('#post-desc').value.trim();
    const yourPostIngr = document.querySelector('#post-ingr').value.trim();
    const yourPostIns = document.querySelector('#post-ins').value.trim(); 
    console.log('ingr stuff', yourPostIngr)



    if (yourPost) {
        try {
        const response = await fetch('api/posts', {
            method: 'POST',
            body: JSON.stringify({ yourPostTitle, yourPostDesc, yourPostIngr, yourPostIns }),
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        console.log('sssssss', data)
        }catch (err) {
            res.status(400).json(err);
          }

    // }

}
document.querySelector('.new-post-form')
.addEventListener('submit', newPostHandler);