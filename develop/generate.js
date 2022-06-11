const generateText=() => {
    return `
        <section id="title">
            <h1>${name}<h1>
        </section>
        <section id="description">
            <h2>Description</h2>
            <p>${description}</p>
        </section>
        <section id="built-with">
            <h2>Built With:</h2>
            ${languages.map(language=>language).join(', ')}
        <section id="installation">
            <h2>Installation</h2>
            <p>${installation}</p>
        <section id="usage">
            <h2>Usage</h2>
            <p>${usage}<p>
        </section>
        <section id=contributions>
            <h2>Contributions<h2>
            <p>${contributing}</p>
        </section>
        <section id="tests">
            <h2>Tests</h2>
            <p>${tests}</p>
        </section>
        <section id="questions">
            <h2>Questions?</h2>
            <p>Please see Github at ${github} for any questions.</p>    
            `   
}