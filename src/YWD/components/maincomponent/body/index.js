import React from 'react';
import Paper from '@material-ui/core/Paper';


export function Main() {
    return (
        <Paper style={{ minHeight: "calc(100vh - 56px)", marginTop: "56px" }}>
            <div>
                <section id="section-1" style={{height:"500px", backgroundColor:"red"}}>section 1</section>
                <section id="section-2" style={{height:"500px", backgroundColor:"green"}}>section 2</section>
                <section id="section-3" style={{height:"500px", backgroundColor:"yellow"}}>section 3</section>
            </div>
        </Paper>
    )
}