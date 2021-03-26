import { useState } from 'react'


export function ExperienceBar() {
    const [progress, setProgress] = useState(0)
    let progressString = `${progress}%`

    const levelUp = () => {
        if(progress < 100) setProgress(progress + 10);
        if(progress === 100) setProgress(0);
    }

    return(
        <header className="experience-bar" onClick={ () =>{levelUp()}}>
            <span>0 xp</span>
            <div>
                <div style={{width: progressString}} />

                <span className="current-experience" style={{left: progressString}}>
                    {progressString}
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}