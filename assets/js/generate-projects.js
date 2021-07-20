projects.forEach(({ repo, title, screenshot, multipleScreenshots } , i) => {
    const screenshotPath = screenshot
        ? screenshot 
        : `https://raw.githubusercontent.com/mels065/${repo}/main/assets/images/screenshots/screenshot${multipleScreenshots ? 1 : ""}.png`;
    const el = $(
        `
            <figure class="project card column ${i === 0 ? "is-full" : "is-one-third-desktop is-half-tablet is-full-mobile"}">
                <header class="has-text-centered">
                    <h3 class="title">${title}</h3>
                    <ul class="project-links columns">
                        <li class="project-link project-demo column"><a class="button is-black" target="_blank" href="https://mels065.github.io/${repo}">Demo</a></li>
                        <li class="project-link project-repo column"><a class="button is-black" target="_blank" href="https://www.github.com/mels065/${repo}">Repo</a></li>
                    </ul>
                </header>
                <img src="${screenshotPath}" alt="${title}" />
            </figure>
        `
    );
    $("#projects").append(el);
});
