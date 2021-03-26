import { useState } from 'react'


export function ExperienceBar() {
    const [progress, setProgress] = useState(0)
    let progressString = `${progress}%`

    const levelUp = () => {
        setProgress(progress + 10)
    }

    return(
        <header className="experience-bar" onClick={ () =>{levelUp()}}>
            <span>0 xp</span>
            <div>
                <div style={{width: progressString}} />

                <span className="current-experience" style={{left: progressString}}>
                    {progress} xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}