module.exports = {
    format_date(date) {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    },
    generate_repo(repo) {
        if (!/^(https:\/\/)*(www\.)*github\.com\/(?!mels065)\/[A-Za-z0-9_\-]+/.test(repo)) {
            return repo;
        } else {
            return `https://www.github.com/mels065/${repo};`
        }
    },
    generate_project_placement(is_showcase) {
        return is_showcase ? "is-full" : "is-one-third-desktop is-half-tablet is-full-mobile"
    },
    generate_collaborators(collaborators) {
        if (collaborators.length > 0) {
            return collaborators.map(
                ({ github_name }) =>
                    `<a class="has-text-black has-text-weight-bold is-size-6" href="https://www.github.com/${github_name}">${github_name}</a>`
            ).join(", ");
        } else {
            return 'None';
        }
    },
    generate_screenshot(screenshot) {
        console.log(screenshot)
        if (screenshot) {
            return `/images/projects/${screenshot}`;
        } else {
            return `/images/projects/placehold.png`;
        }
    }
};
