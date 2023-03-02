
import React, { useEffect, useState } from 'react';
import Stories from 'react-insta-stories';
import './Stories.css'
function StoriesComponent(props) {
    const { data } = props
    const [stories, setStories] = useState([{ url: '' }])
    let _ = { ...data }
    _.story.forEach(e => {
        return e.header = {
            heading: `${_.name}`,
            subheading: "Posted 30m ago",
            profileImage: `${_.avatar}`
        }
    });
    useEffect(() => {
        setStories(_.story)
    }, [data])

    return (
        <div className='stories-item'>
            <header className='stories-header' >
                <div className='header-button'>
                    <button className='play'><div><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path></svg></div></button>
                    <button className='pause'><div><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="16" role="img" viewBox="0 0 48 48" width="16"><path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"></path></svg></div></button>
                    <button className='no-sound'><div><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M11.403 1.083a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917ZM20.704 12l1.94-1.94a1.5 1.5 0 0 0-2.122-2.12l-1.939 1.939-1.94-1.94a1.5 1.5 0 1 0-2.12 2.122L16.461 12l-1.94 1.94a1.5 1.5 0 1 0 2.122 2.12l1.939-1.939 1.94 1.94a1.5 1.5 0 0 0 2.12-2.122Z"></path></svg></div></button>
                    <button><div><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="2.75"></circle><circle cx="19.5" cy="12" r="2.75"></circle><circle cx="4.5" cy="12" r="2.75"></circle></svg></div></button>
                </div>
            </header >
            <div className='stories-footer'>
                <div className='footer-wrapper'>
                    <div className='reply-wrapper'>
                        <div className="reply">
                            <input type="text" placeholder={`Reply to ${_.name}`}></input>
                        </div>
                    </div>
                    <div className='footer-button'>
                        <button><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg></button>

                        <button><svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></button>
                    </div>
                </div>
            </div>
            <Stories
                stories={stories}
                defaultInterval={5000}
                width='100%'
                height='100%'
                preventDefault={true}
            />
        </div >
    )
}


export default StoriesComponent;