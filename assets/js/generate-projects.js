projects.forEach(({ 
    repo,
    title,
    screenshot,
    multipleScreenshots,
    collaborators
} , i) => {
    const screenshotPath = screenshot
        ? screenshot 
        : `https://raw.githubusercontent.com/mels065/${repo}/main/assets/images/screenshots/screenshot${multipleScreenshots ? 1 : ""}.png`;
    const el = $(
        `
            <figure class="project card column ${i === 0 ? "is-full" : "is-one-third-desktop is-half-tablet is-full-mobile"}">
                <header class="card-header">
                    <h3 class="title">${title}</h3>
                </header>
                <div class="card-content">
                    <p class="card-text">Collaborators: ${collaborators ? generateCollaborators(collaborators) : "None"}</p>
                    <ul class="project-links is-flex">
                        <li class="project-link project-demo"><a class="button is-link is-outlined" target="_blank" href="https://mels065.github.io/${repo}">Demo</a></li>
                        <li class="project-link project-repo"><a class="button is-link is-outlined" target="_blank" href="https://www.github.com/mels065/${repo}">Repo</a></li>
                    </ul>
                </div>
                <hr />
                <div class="card-image">
                    <img class="image" src="${screenshotPath}" alt="${title}" />
                </div>
            </figure>
        `
    );
    $("#projects").append(el);
});

function generateCollaborators(collaborators) {
    return collaborators.map(
        (person) =>
            `<a class="has-text-black has-text-weight-bold is-size-6" href="https://www.github.com/${person}">${person}</a>`
    ).join(", ")
}
