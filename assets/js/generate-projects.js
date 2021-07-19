projects.forEach(({ repo, title, screenshot, multipleScreenshots }) => {
    const screenshotPath = screenshot
        ? screenshot 
        : `https://raw.githubusercontent.com/mels065/${repo}/main/assets/images/screenshots/screenshot${multipleScreenshots ? 1 : ""}.png`;
    const el = $(
        `
        <figure class="project">
            <a href="https://mels065.github.io/${repo}">
                <h3>${title}</h3>
                <img src="${screenshotPath}" alt="${title}" />
            </a>
        </figure>
        `
    );
    $("#projects").append(el);
});
